#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html

let generate' (ctx : SiteContents) (_: string) =
    let docs0 = ctx.TryGetValues<Docsloader.Docs> () |> Option.defaultValue Seq.empty

    let layoutForMinimalDocsAncestor (docsLists: seq<HtmlElement> list) =
        Layout.layout ctx "Home" [
            section [Class "section"] [
                div [Class "container"] [
                    yield! docsLists
                    |> List.map (fun docs ->
                        div [Class "tile is-ancestor"] [
                            yield! docs
                        ]
                    )
                ]
            ]
        ]

    docs0
    |> Seq.sortByDescending (fun x -> x.published)
    |> Seq.chunkBySize 3
    |> Seq.map (Seq.map Layout.docsMinimalLayout)
    |> Seq.toList
    |> layoutForMinimalDocsAncestor
    |> Layout.render ctx

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page