#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
// This can be used to access local .nupkg, thanks to the nuget.config file.
#r "nuget: Nfdi4Plants.Fornax, 0.0.0"

open System.IO
open Fornax.Nfdi4Plants

let contentDir = "docs"

let loader (projectRoot: string) (siteContent: SiteContents) =
    let docsPath = Path.Combine(projectRoot, contentDir)
    let files = 
        Directory.GetFiles(docsPath, "*")
        |> Array.filter (fun n -> n.EndsWith ".md")
        |> Array.filter (fun n -> n.Contains "README.md" |> not)
    let docs = 
        files 
        |> Array.map (Docs.loadFile projectRoot contentDir)

    printfn "LOADER: %i" <| Seq.length docs

    docs 
    |> Array.iter siteContent.Add

    siteContent.Add({disableLiveRefresh = false})
    siteContent
