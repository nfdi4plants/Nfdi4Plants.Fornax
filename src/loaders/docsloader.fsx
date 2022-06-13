#r "../_lib/Fornax.Core.dll"
#r "../_lib/Markdig.dll"
#i """nuget: C:\Users\Kevin\source\repos\Nfdi4Plants.Fornax\pkg"""
#r "nuget: Nfdi4Plants.Fornax"

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
        |> Array.map (Docs.loadFile projectRoot contentDir)
        
    printfn "LOADER: %i" <| Seq.length docs

    docs 
    |> Array.iter siteContent.Add

    siteContent.Add({disableLiveRefresh = false})
    siteContent
