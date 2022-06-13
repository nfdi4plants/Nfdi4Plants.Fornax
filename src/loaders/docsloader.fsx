#r "../_lib/Fornax.Core.dll"
#r "../_lib/Nfdi4Plants.Fornax.dll"

open System.IO
open Fornax.Nfdi4Plants

let contentDir = "docs"

let loader (projectRoot: string) (siteContent: SiteContents) =
    let docsPath = Path.Combine(projectRoot, contentDir)
    // let options = EnumerationOptions(RecurseSubdirectories = true)
    // let files = Directory.GetFiles(docsPath, "*"), options)
    let files = 
        Directory.GetFiles(docsPath, "*")
        |> Array.filter (fun n -> n.EndsWith ".md")
        |> Array.filter (fun n -> n.Contains "README.md" |> not)
    let docs = 
        files 
        |> Array.map (Docs.loadFile projectRoot)
    docs
    |> Array.iter siteContent.Add

    siteContent.Add({disableLiveRefresh = false})
    siteContent
