#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html

let generate' (ctx : SiteContents) (_: string) =
    let docs0 = ctx.TryGetValues<Docsloader.Docs> () |> Option.defaultValue Seq.empty

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

    let landingPage = docs0 |> Seq.tryFind(fun x -> x.title = "Index")
    match landingPage with
    | Some docs -> 
        printfn "found!"
        Layout.layout ctx docs.title [
            docs |> Layout.docsLayout
        ]
    | None -> 
        failwith "Could not find index markdown file (title: 'Index') in docs folder."

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page
    |> Layout.render ctx