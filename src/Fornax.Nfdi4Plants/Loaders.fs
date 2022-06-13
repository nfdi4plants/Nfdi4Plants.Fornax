namespace Fornax.Nfdi4Plants


module Pipelines =
    open Markdig
    open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiHeader
    open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiSidebarElementHeader

    let markdownPipeline =
        MarkdownPipelineBuilder()
            .UseAdvancedExtensions()
            .UseEmojiAndSmiley()
            .UseNFDIHeader()
            .Build()

    let sidebarMarkdownPipeline =
        MarkdownPipelineBuilder()
            .UseSidebarHeader()
            .Build()


type DocsConfig = {
    disableLiveRefresh: bool
}

type SidebarElement = {
    Title: string
    Content: string
}

type Docs = {
    file: string
    link : string
    title: string
    author: string option
    published: System.DateTime option
    add_toc: bool
    sidebar: SidebarElement []
    content: string
}

module internal Aux =
    
    let private isSeparator (input : string) =
        input.StartsWith "---"

    let private splitKey' (line: string) =
        Fornax.Nfdi4Plants.MarkdigExtensions.Aux.splitKey line
        |> fun (key, v) -> 
            v 
            |> Option.map(fun v -> (key, v))

    let internal trimString (str : string) =
        str.Trim().TrimEnd('"').TrimStart('"')
        
    // Parse over line to find area between "---". Parse input, very simple by separating by ":"
    ///`fileConfig` - Metadata at the top of an .md file
    let getConfig (fileContent : string) =
        let fileContent = fileContent.Split '\n'
        let fileContent = fileContent |> Array.skip 1 //First line must be ---
        let indexOfSeperator = fileContent |> Array.findIndex isSeparator
        fileContent
        |> Array.splitAt indexOfSeperator
        |> fst
        |> Seq.choose splitKey'
        |> Map.ofSeq

    open System.IO

    /// <summary>Read sidebar markdown file at `sidebarPath` to and parse it nfdi-sidebar-element's.</summary>
    /// <param name="contentDir">Name of the subfolder in which the docs files are.</param>
    /// <param name="sidebarPath">Relative path to sidebar file.</param>
    /// <returns>Array of all sidebar elements processed to html and metadata.</returns>
    let getSidebar (contentDir: string) (sidebarPath: string)=
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
                    Content = Markdig.Markdown.ToHtml(c, Pipelines.sidebarMarkdownPipeline)
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

[<AutoOpen>]
module Docs = 

    open System.IO
    
    /// <summary>Parse markdown `fileContent` to HTML with markdig and custom nfdi-webcomponent converter.</summary>
    /// <param name="rootDir">Base root directory path, will be appended to 'contentDir'.</param>
    /// <param name="contentDir">Folder which to search for docs .md files. This folder will be used a relative root for sidebars.</param>
    /// <param name="filePath">Relative path to specific `.md` file.</param>
    /// <returns>Returns html as string.</returns>
    let loadFile (rootDir: string) (contentDir: string) (filePath: string) =
        let text = File.ReadAllText filePath

        let config = Aux.getConfig text

        let title = config |> Map.find "title" |> Aux.trimString
        let author = config |> Map.tryFind "author" |> Option.map Aux.trimString
        let published = config |> Map.tryFind "published" |> Option.map (Aux.trimString >> System.DateTime.Parse)
        let addToc = config |> Map.tryFind "add toc" |> Option.map (Aux.trimString >> System.Boolean.Parse) |> Option.defaultValue true
        let addSidebar = 
            let docsPath = Path.Combine(rootDir, contentDir)
            config |> Map.tryFind "add sidebar" |> Option.map (Aux.trimString >> fun x -> Path.Combine(docsPath, x.Replace('\\','/')))

        let content = Aux.getContent text
        let sidebar = addSidebar |> Option.map (Aux.getSidebar contentDir) 
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
            author = author
            published = published
            content = content 
            add_toc = addToc 
            sidebar = if sidebar.IsSome then sidebar.Value else [||] }    