namespace Fornax.Nfdi4Plants
open System.IO

module Pipelines =
    open Markdig
    open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiCode
    open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiHeader
    open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiSidebarElementHeader

    let markdownPipeline =
        MarkdownPipelineBuilder()
            .UseAdvancedExtensions()
            .UseEmojiAndSmiley()
            .UseNFDIHeader()
            .UseNFDICodeBlock()
            .Build()

    let sidebarMarkdownPipeline(productionBasePath: string option) =
        if productionBasePath.IsSome then
            MarkdownPipelineBuilder()
                .UseSidebarHeader(productionBasePath.Value)
                .Build()
        else
            MarkdownPipelineBuilder()
                .UseSidebarHeader()
                .Build()

type SidebarElement = {
    Title: string
    Content: string
}

type Author = {
    Name: string
    // url to profile
    GitHub: string option
    // id
    ORCID: string option
} with
    static member create name github orcid = {Name = name; GitHub = github; ORCID = orcid}

    static member createNameOnly name = {Name = name; GitHub = None; ORCID = None}

type Docs = {
    file: string
    link : string
    title: string
    authors: Author []
    /// The last time the document was updated
    published: System.DateTime option
    /// Bool if automated nfdi-toc should be added
    add_toc: bool
    /// Bool if automated "Dataplant Support" block should be added
    add_support: bool
    sidebar: SidebarElement []
    content: string
} 

module Aux =
    
    let internal isSeparator (input : string) =
        input.StartsWith "---"

    let internal splitKey' (line: string) =
        Fornax.Nfdi4Plants.MarkdigExtensions.Aux.splitKey line
        |> fun (key, v) -> 
            v 
            |> Option.map(fun v -> (key, v))

    let internal trimString (str : string) =
        str.Trim().TrimEnd('"').TrimStart('"')
        
    let internal isJSONObject (str:string) =
        str
        |> trimString
        |> fun trimmedStr -> trimmedStr.StartsWith "{" && trimmedStr.EndsWith "}"

    let internal parseJSONObject (str:string) =
        str
            // remove "{" and "}" at start/end
            .[1 .. str.Length - 2]
            // split by ","
            .Split(",")
        |> Array.map (fun keyValuePair ->
            keyValuePair
            // trim leftover whitespace
            |> trimString
            // split keys
            |> splitKey'
        )
        
    // Parse over line to find area between "---". Parse input, very simple by separating by ":"
    ///`fileConfig` - Metadata at the top of an .md file
    let getConfig (fileContent : string) =
        let fileContent = fileContent.Split '\n'
        if fileContent.[0].Trim() <> "---" then failwithf """File must start with metadata block opener "---", but started with "%s".""" <| fileContent.[0].Trim()
        let fileContent = fileContent |> Array.skip 1 //First line must be ---
        let indexOfSeperator = fileContent |> Array.tryFindIndex isSeparator
        if indexOfSeperator.IsNone then failwith """File does not contain closing line for metadata block "---"."""
        fileContent
        |> Array.splitAt indexOfSeperator.Value
        |> fst
        |> Seq.choose splitKey'
        |> Map.ofSeq

    type Docs with

        static member createFromConfig (configArr: (string * string) [], existingDocs: Docs) =
            let title = 
                configArr 
                |> Array.tryFind (fun x -> fst x = "title")
                |> Option.map snd
                // same as "fun x -> match x with"
                |> function | Some title -> trimString title | None -> failwith $"""Could not find "Title"-metadata."""
            let author = 
                configArr 
                |> Array.tryFind (fun x -> fst x = "author")
                |> Option.map snd
                |> Option.map trimString
            let published = 
                configArr 
                |> Array.tryFind (fun x -> fst x = "date" || fst x = "published") 
                |> Option.map (snd >> trimString >> System.DateTime.Parse)
            let addToc = 
                configArr 
                |> Array.tryFind (fun x -> fst x = "add toc") 
                |> Option.map (snd >> trimString >> System.Boolean.Parse) 
                |> Option.defaultValue true
            let addSupport = 
                configArr 
                |> Array.tryFind (fun x -> fst x = "add support") 
                |> Option.map (snd >> trimString >> System.Boolean.Parse) 
                |> Option.defaultValue true
            {
                existingDocs with
                    title = title
                    authors = if author.IsSome then Author.createNameOnly author.Value |> Array.singleton else [||]
                    published = published
                    add_toc = addToc
                    add_support = addSupport
            }

        static member createFromConfig (configArr: (string * string) []) =

            0


    open System.IO

    /// <summary>Read sidebar markdown file at `sidebarPath` to and parse it nfdi-sidebar-element's.</summary>
    /// <param name="contentDir">Name of the subfolder in which the docs files are.</param>
    /// <param name="sidebarPath">Relative path to sidebar file.</param>
    /// <returns>Array of all sidebar elements processed to html and metadata.</returns>
    let getSidebar (contentDir: string) (productionBasePath: string option) (sidebarPath: string) =
        let fileContent = 
            let docsPath = Path.Combine(contentDir, sidebarPath)
            File.ReadAllLines(docsPath) 
            |> Array.skip 1 //First line must be ---
        let indexOfSeperator = fileContent |> Array.findIndex isSeparator
        let content = 
            fileContent 
            |> Array.splitAt indexOfSeperator 
            |> snd 
            |> Array.skip 1 // starts with ---
        let sidebar =
            content 
            |> List.ofArray 
            |> List.fold (fun acc line -> 
                // opens new sidebar element with title
                // ` = '\096'
                if line.Trim() = "```" then 
                    acc
                elif line.StartsWith "```" then
                    // get sidebar element title
                    let title = line.Replace("`", "").Trim()
                    // add to list collection with empty list.
                    // empty list will be used to add all related lines
                    (title, List.empty)::acc
                elif line.Trim() <> "" then
                    // match with list collection to check if it is empty (should not be empty, this is error prediction)
                    match acc with
                    // if has element, add line to sidebar element
                    | h::t -> (fst h, line::snd h)::t
                    // if is empty add sidebar placeholder
                    | [] -> ("Sidebar", line::[])::acc
                else 
                    acc
            ) []
            |> List.map (fun (title, lines) ->
                let c = lines |> List.rev |> String.concat "\n"
                {
                    Title = title
                    Content = Markdig.Markdown.ToHtml(c, Pipelines.sidebarMarkdownPipeline(productionBasePath))
                }
            )
            |> List.rev
            |> Array.ofList
        sidebar

    /// <summary>Parse markdown `fileContent` to HTML with markdig and custom nfdi-webcomponent converter.</summary>
    /// <param name="fileContent">Markdown file content. Usually whole content of `.md` file.</param>
    /// <returns>Returns html as string.</returns>
    let getContent (fileContent : string) =
        let fileContent = fileContent.Split '\n'
        let fileContent = fileContent |> Array.skip 1 //First line must be ---
        let indexOfSeperator = fileContent |> Array.findIndex isSeparator
        let content = 
            fileContent 
            |> Array.splitAt indexOfSeperator 
            |> snd 
            |> Array.skip 1 // starts with ---
            |> String.concat "\n"

        Markdig.Markdown.ToHtml(content, Pipelines.markdownPipeline)  

type Docs with

    /// <summary>Parse markdown `fileContent` to HTML with markdig and custom nfdi-webcomponent converter.</summary>
    /// <param name="rootDir">Base root directory path, will be appended to 'contentDir'.</param>
    /// <param name="contentDir">Folder which to search for docs .md files. This folder will be used a relative root for sidebars.</param>
    /// <param name="filePath">Relative path to specific `.md` file.</param>
    /// <param name="productionBasePath">This path can be used if the base path in production is not `/`. This happens in some gh-pages projects.</param>
    /// <returns>Returns html as string.</returns>
    static member loadFile(rootDir: string, contentDir: string, filePath: string, ?productionBasePath) : Docs =
        try 
            let text = File.ReadAllText filePath

            let config = Aux.getConfig text

            
           
            let addSidebar = 
                let docsPath = Path.Combine(rootDir, contentDir)
                config |> Map.tryFind "add sidebar" |> Option.map (Aux.trimString >> fun x -> Path.Combine(docsPath, x.Replace('\\','/')))

            let content = Aux.getContent text
            let sidebar = 
                addSidebar |> Option.map (Aux.getSidebar contentDir productionBasePath) 
            let chopLength =
                if rootDir.EndsWith(Path.DirectorySeparatorChar) then rootDir.Length
                else rootDir.Length + 1

            let dirPart =
                filePath
                |> Path.GetDirectoryName
                |> fun x -> x.[chopLength .. ]

            let file = Path.Combine(dirPart, (filePath |> Path.GetFileNameWithoutExtension) + ".md").Replace("\\", "/")
            let link = "/" + Path.Combine(dirPart, (filePath |> Path.GetFileNameWithoutExtension) + ".html").Replace("\\", "/")

            {   file = file
                link = link
                title = title
                authors = if author.IsSome then Author.createNameOnly author.Value |> Array.singleton else [||]
                published = published
                add_toc = addToc 
                add_support = false
                content = content 
                sidebar = if sidebar.IsSome then sidebar.Value else [||] }    
        with
            | e -> failwith $"""[Error in file {filePath}] {e.Message}"""
    