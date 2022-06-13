#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
#r "../Fornax.Nfdi4Plants/bin/Debug/net5.0/Fornax.Nfdi4Plants.dll"

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
    printfn "HIER: %i" files.Length
    let docs = 
        files 
        |> Array.map (loadFile projectRoot)
    printfn "HIER2: %i" docs.Length
    docs
    |> Array.iter siteContent.Add

    siteContent.Add({disableLiveRefresh = false})
    siteContent
