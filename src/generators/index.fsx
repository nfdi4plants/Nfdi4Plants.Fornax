#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html

let generate' (ctx : SiteContents) (_: string) =
    let docs0 = ctx.TryGetValues<Docsloader.Docs> () |> Option.defaultValue Seq.empty

    printfn "%A" (docs0|> Seq.length) // 1

    let layoutForMinimalDocsAncestor docs =
        Layout.layout ctx "Home" [
            section [Class "section"] [
                div [Class "container"] [
                    div [Class "tile is-ancestor"] [
                        yield! docs
                    ]
                ]
            ]
        ]

    docs0
    |> Seq.sortByDescending (fun x -> x.published)
    |> Seq.toList
    |> List.map Layout.docsMinimalLayout
    |> layoutForMinimalDocsAncestor
    |> Layout.render ctx

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page