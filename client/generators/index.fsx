#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html
open Fornax
open Docsloader

let generate' (ctx : SiteContents) (_: string) =
    let docs0 = ctx.TryGetValues<Nfdi4Plants.Docs> () |> Option.defaultValue Seq.empty
    printfn "GENERATOR: %i" <| Seq.length docs0

    let landingPage = docs0 |> Seq.tryFind(fun x -> x.title = "Index" || x.title = "Home")
    match landingPage with
    | Some docs -> 
        Layout.layout ctx docs.title [
            docs |> Layout.docsLayout
        ]
    | None -> 
        failwith "Could not find index markdown file (title: 'Index' or title: 'Home') in docs folder."

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page
    |> Layout.render ctx