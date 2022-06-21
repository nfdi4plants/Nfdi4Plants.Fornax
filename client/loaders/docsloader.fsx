#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
// This can be used to access local .nupkg, thanks to the nuget.config file.
#r "nuget: Nfdi4Plants.Fornax, 0.2.2"

open System.IO
open Fornax
open Fornax.Nfdi4Plants

let contentDir = "docs"

type DocsConfig = {
    disableLiveRefresh: bool
}

let loader (projectRoot: string) (siteContent: SiteContents) =
    let docsPath = Path.Combine(projectRoot, contentDir)
    let files = 
        Directory.GetFiles(docsPath, "*")
        |> Array.filter (fun n -> n.EndsWith ".md")
        |> Array.filter (fun n -> n.Contains "README.md" |> not)
    let docs = 
        files 
        |> Array.map (Docs.loadFile projectRoot contentDir)

    let doc =
        siteContent.TryGetValues<Nfdi4Plants.DocsData> ()
        |> Option.defaultValue Seq.empty

    printfn "LOADER CURRENT DOCS: %i" <| Seq.length doc
    printfn "LOADER ADDING DOCS: %i" <| Seq.length docs

    /// Alternative.
    let sc = new SiteContents()

    docs 
    |> Array.iter siteContent.Add

    let doc2 =
        siteContent.TryGetValues<Nfdi4Plants.DocsData> ()
        |> Option.defaultValue Seq.empty

    printfn "LOADER NEXT DOCS: %i" <| Seq.length doc2

    siteContent.Add({disableLiveRefresh = false})
    siteContent
