#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html

let generate' (ctx : SiteContents) (page: string) =
    let doc =
        ctx.TryGetValues<Docsloader.Docs> ()
        |> Option.defaultValue Seq.empty
        |> Seq.find (fun n -> n.file = page)

    Layout.layout ctx doc.title [
        Layout.docsLayout doc
    ]

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page
    |> Layout.render ctx