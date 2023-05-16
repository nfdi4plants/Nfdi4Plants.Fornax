#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
// // This can be used to access local .nupkg, thanks to the nuget.config file.
#load "_lib.fsx"

open System.IO
open Fornax

///<summary>This is used to append a subpath to the url to create relative urls.</summary>
///<example>"nfdi4plants.knowledgebase", https://github.com/nfdi4plants/nfdi4plants.knowledgebase/blob/1aca2e019b7f9fff9c14c9d85caac3641f82314f/src/loaders/docsloader.fsx#L31</example>
let productionBasePath = "placeholder"

let contentDir = "docs"

type DocsConfig = {
    disableLiveRefresh: bool
}

let loader (projectRoot: string) (siteContent: SiteContents) =
    let docsPath = Path.Combine(projectRoot, contentDir)
    let options = EnumerationOptions(RecurseSubdirectories = true)
    let files = 
        Directory.GetFiles(docsPath, "*", options)
        |> Array.filter (fun n -> n.Contains @"\_sidebars\" |> not && n.Contains "/_sidebars/" |> not)
        |> Array.filter (fun n -> n.Contains @"\_ignored\" |> not && n.Contains "/_ignored/" |> not)
        // |> Array.filter (fun n -> n.Contains "README.md" |> not)
        |> Array.filter (fun n -> n.EndsWith ".md")
    /// #if WATCH during development
    /// #else in production, for example on gh-pages.
    let docs = 
        let loadDocs (filePath:string) = 
            #if WATCH
            Nfdi4Plants.Docs.loadFile(projectRoot, contentDir, filePath, includeSearchbar = true, useNewSidebar = true)
            #else
            Nfdi4Plants.Docs.loadFile(projectRoot, contentDir, filePath, includeSearchbar = true, useNewSidebar = true, productionBasePath = productionBasePath)
            #endif
        files 
        |> Array.map loadDocs

    docs
    |> Array.iter(fun doc ->
        doc.sidebar.Length |> printfn "[Count %s] %A" doc.title
    )

    // let test =
    //     let getSidebar (contentDir: string) (productionBasePath: string option) (sidebarPath: string) =
    //         let isSeparator (input : string) = input.StartsWith "---"
    //         let fileContent = 
    //             let docsPath = Path.Combine(contentDir, sidebarPath)
    //             File.ReadAllLines(docsPath) 
    //             |> Array.skip 1 //First line must be ---
    //         let indexOfSeperator = fileContent |> Array.findIndex isSeparator
    //         let content = 
    //             fileContent 
    //             |> Array.splitAt indexOfSeperator 
    //             |> snd 
    //             |> Array.skip 1 // starts with ---
    //             |> Array.filter(fun x -> x <> "")
    //         content 
    //         |> Array.iteri (fun i x -> printfn "[%i] %A" i x)
    //         let sidebar =
    //             Fornax.Nfdi4Plants.CustomParsing.SidebarEleneo.read content
    //             |> List.map (Fornax.Nfdi4Plants.CustomParsing.SidebarEleneo.write true)
    //         sidebar.Length |> printfn "[Count Sidebar] %A"
    //     getSidebar contentDir None @"_sidebars\mainSidebar.md"

    let doc =
        siteContent.TryGetValues<Nfdi4Plants.Docs> ()
        |> Option.defaultValue Seq.empty

    printfn "LOADER CURRENT DOCS: %i" <| Seq.length doc
    printfn "LOADER ADDING DOCS: %i" <| Seq.length docs

    let sc = new SiteContents()

    docs 
    |> Array.iter sc.Add

    let scTest =
        siteContent.TryGetValues<Nfdi4Plants.Docs> ()
        |> Option.defaultValue Seq.empty

    printfn "LOADER NEXT DOCS: %i" <| Seq.length scTest

    sc.Add({disableLiveRefresh = false})
    sc
