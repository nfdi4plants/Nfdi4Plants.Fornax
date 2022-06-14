#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html
open Fornax

let generate' (ctx : SiteContents) (_: string) =
    let docs0 = ctx.TryGetValues<Nfdi4Plants.DocsData> () |> Option.defaultValue Seq.empty
    printfn "GENERATOR: %i" <| Seq.length docs0
    // let layoutForMinimalDocsAncestor (docsLists: seq<HtmlElement> list) =
    //     Layout.layout ctx "Home" [
    //         section [Class "section"] [
    //             div [Class "container"] [
    //                 yield! docsLists
    //                 |> List.map (fun docs ->
    //                     div [Class "tile is-ancestor"] [
    //                         yield! docs
    //                     ]
    //                 )
    //             ]
    //         ]
    //     ]

    // // Use this for a tile based landing page
    // docs0    
    // |> Seq.sortByDescending (fun x -> x.published)
    // |> Seq.chunkBySize 3
    // |> Seq.map (Seq.map Layout.docsMinimalLayout)
    // |> Seq.toList
    // |> layoutForMinimalDocsAncestor
    // |> Layout.render ctx

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