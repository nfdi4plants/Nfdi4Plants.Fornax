#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
// // This can be used to access local .nupkg, thanks to the nuget.config file.
#load "_lib.fsx"

open System.IO
open Fornax

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
    let loadDocs (filePath:string) = Nfdi4Plants.Docs.loadFile(projectRoot, contentDir, filePath)
    /// #if WATCH during development
    /// #else in production, for example on gh-pages.
    let docs = 
        let loadDocs (filePath:string) = 
            #if WATCH
            Nfdi4Plants.Docs.loadFile(projectRoot, contentDir, filePath)
            #else
            Nfdi4Plants.Docs.loadFile(projectRoot, contentDir, filePath, productionBasePath = "placeholder")
            #endif
        files 
        |> Array.map loadDocs

    let doc =
        siteContent.TryGetValues<Nfdi4Plants.Docs> ()
        |> Option.defaultValue Seq.empty

    printfn "LOADER CURRENT DOCS: %i" <| Seq.length doc
    printfn "LOADER ADDING DOCS: %i" <| Seq.length docs

    // Alternative
    // let sc = new SiteContents()

    let sc = new SiteContents()

    docs 
    |> Array.iter sc.Add

    let scTest =
        siteContent.TryGetValues<Nfdi4Plants.Docs> ()
        |> Option.defaultValue Seq.empty

    printfn "LOADER NEXT DOCS: %i" <| Seq.length scTest

    sc.Add({disableLiveRefresh = false})
    sc
