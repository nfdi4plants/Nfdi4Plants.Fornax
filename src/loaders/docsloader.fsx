#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
#load "nfdi-header-extension.fsx"

open System.IO
open Markdig

open System.IO
open Markdig

type DocsConfig = {
    disableLiveRefresh: bool
}
type Docs = {
    file: string
    link : string
    title: string
    author: string option
    published: System.DateTime option
    content: string
}

let contentDir = "docs"

open ``Nfdi-header-extension``

let markdownPipeline =
    MarkdownPipelineBuilder()
        .UseAdvancedExtensions()
        .UseEmojiAndSmiley()
        .UseNFDIHeader()
        .Build()

let isSeparator (input : string) =
    input.StartsWith "---"


// Parse over line to find area between "---". Parse input, very simple by separating by ":"

///`fileConfig` - Metadata at the top of an .md file
let getConfig (fileContent : string) =
    let fileContent = fileContent.Split '\n'
    let fileContent = fileContent |> Array.skip 1 //First line must be ---
    let indexOfSeperator = fileContent |> Array.findIndex isSeparator
    let splitKey (line: string) =
        let seperatorIndex = line.IndexOf(':')
        if seperatorIndex > 0 then
            let key = line.[.. seperatorIndex - 1].Trim().ToLower()
            let value = line.[seperatorIndex + 1 ..].Trim()
            Some(key, value)
        else
            None
    fileContent
    |> Array.splitAt indexOfSeperator
    |> fst
    |> Seq.choose splitKey
    |> Map.ofSeq    

///`fileContent` - content of page to parse. Usually whole content of `.md` file
///returns HTML version of content of the page
let getContent (fileContent : string) =
    let fileContent = fileContent.Split '\n'
    let fileContent = fileContent |> Array.skip 1 //First line must be ---
    let indexOfSeperator = fileContent |> Array.findIndex isSeparator
    let _, content = fileContent |> Array.splitAt indexOfSeperator

    // check for <!--more--> separator in content, and add everything after to "extend area in page". (when you click on the header)

    // let summary, content =
    //     match content |> Array.tryFindIndex isSummarySeparator with
    //     | Some indexOfSummary ->
    //         let summary, _ = content |> Array.splitAt indexOfSummary
    //         summary, content
    //     | None ->
    //         content, content

    // let summary = summary |> Array.skip 1 |> String.concat "\n"
    let content = content |> Array.skip 1 |> String.concat "\n"

    // Markdown.ToHtml(summary, markdownPipeline),
    Markdown.ToHtml(content, markdownPipeline)    

let trimString (str : string) =
    str.Trim().TrimEnd('"').TrimStart('"')

let loadFile (rootDir: string) (filePath: string) =
    let text = File.ReadAllText filePath

    let config = getConfig text
    let content = getContent text
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

    let title = config |> Map.find "title" |> trimString
    let author = config |> Map.tryFind "author" |> Option.map trimString
    let published = config |> Map.tryFind "published" |> Option.map (trimString >> System.DateTime.Parse)

    { file = file
      link = link
      title = title
      author = author
      published = published
      content = content }    

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
