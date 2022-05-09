#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
#load "nfdi-header-extension.fsx"
#load "sidebar-header-extension.fsx"

open System.IO
open Markdig

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

let contentDir = "docs"

open ``Nfdi-header-extension``
open ``Sidebar-header-extension``

let markdownPipeline =
    MarkdownPipelineBuilder()
        .UseAdvancedExtensions()
        .UseEmojiAndSmiley()
        .UseNFDIHeader()
        .Build()

let isSeparator (input : string) =
    input.StartsWith "---"

let isSidebarSeparator (input : string) =
    input.StartsWith "<!--sidebar-->"

let splitKey (line: string) =
    let seperatorIndex = line.IndexOf(':')
    if seperatorIndex > 0 then
        let key = line.[.. seperatorIndex - 1].Trim().ToLower()
        let value = line.[seperatorIndex + 1 ..].Trim()
        Some(key, value)
    else
        None

// Parse over line to find area between "---". Parse input, very simple by separating by ":"
///`fileConfig` - Metadata at the top of an .md file
let getConfig (fileContent : string) =
    let fileContent = fileContent.Split '\n'
    let fileContent = fileContent |> Array.skip 1 //First line must be ---
    let indexOfSeperator = fileContent |> Array.findIndex isSeparator
    fileContent
    |> Array.splitAt indexOfSeperator
    |> fst
    |> Seq.choose splitKey
    |> Map.ofSeq

let sidebarMarkdownPipeline =
    MarkdownPipelineBuilder()
        .UseSidebarHeader()
        .Build()


///`fileContent` - content of page to parse. Usually whole content of `.md` file
///returns HTML version of content of the page
let getContent (fileContent : string) (hasSidebar: bool) =
    let fileContent = fileContent.Split '\n'
    let fileContent = fileContent |> Array.skip 1 //First line must be ---
    let indexOfSeperator = fileContent |> Array.findIndex isSeparator
    let content0 = fileContent |> Array.splitAt indexOfSeperator |> snd |> Array.skip 1

    // check for <!--sidebar--> separator in content
    let sidebar, content =
        match hasSidebar, content0 |> Array.tryFindIndex isSidebarSeparator with
        | true, Some indexOfSidebar ->
            let sidebar, content = content0 |> Array.splitAt indexOfSidebar
            let groupedSidebar =
                sidebar 
                |> List.ofArray 
                |> List.fold (fun acc line -> 
                    // opens new sidebar element with title
                    if line.StartsWith "title:" then
                        // get sidebar element title
                        let title = splitKey line |> Option.map snd |> Option.defaultValue "Sidebar"
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
                        Content = Markdown.ToHtml(c, sidebarMarkdownPipeline)
                    }
                )
                |> Array.ofList
            groupedSidebar, content
        | _, _ ->
            [||], content0

    // let summary = summary |> Array.skip 1 |> String.concat "\n"
    let content = content |> String.concat "\n"

    sidebar,
    Markdown.ToHtml(content, markdownPipeline)    

let trimString (str : string) =
    str.Trim().TrimEnd('"').TrimStart('"')

let loadFile (rootDir: string) (filePath: string) =
    let text = File.ReadAllText filePath

    let config = getConfig text

    let title = config |> Map.find "title" |> trimString
    let author = config |> Map.tryFind "author" |> Option.map trimString
    let published = config |> Map.tryFind "published" |> Option.map (trimString >> System.DateTime.Parse)
    let addToc = config |> Map.tryFind "add toc" |> Option.map (trimString >> System.Boolean.Parse) |> Option.defaultValue true
    let addSidebar = config |> Map.tryFind "add sidebar" |> Option.map (trimString >> System.Boolean.Parse) |> Option.defaultValue false

    let sidebar, content = getContent text addSidebar
    let chopLength =
        if rootDir.EndsWith(Path.DirectorySeparatorChar) then rootDir.Length
        else rootDir.Length + 1

    let dirPart =
        filePath
        |> Path.GetDirectoryName
        |> fun x -> x.[chopLength .. ]

    let file = Path.Combine(dirPart, (filePath |> Path.GetFileNameWithoutExtension) + ".md").Replace("\\", "/")
    // let testFileName = (((filePath |> Path.GetFileNameWithoutExtension) + "-test.html").Replace("\\", "/"))
    // File.WriteAllText("../" + testFileName, content)
    let link = "/" + Path.Combine(dirPart, (filePath |> Path.GetFileNameWithoutExtension) + ".html").Replace("\\", "/")

    { file = file
      link = link
      title = title
      author = author
      published = published
      content = content 
      add_toc = addToc 
      sidebar = if addSidebar then sidebar else Array.empty}    

let loader (projectRoot: string) (siteContent: SiteContents) =
    let postsPath = Path.Combine(projectRoot, contentDir)
    let options = EnumerationOptions(RecurseSubdirectories = true)
    let files = Directory.GetFiles(postsPath, "*", options)
    files
    |> Array.filter (fun n -> n.EndsWith ".md")
    |> Array.map (loadFile projectRoot)
    |> Array.iter siteContent.Add

    siteContent.Add({disableLiveRefresh = false})
    siteContent
