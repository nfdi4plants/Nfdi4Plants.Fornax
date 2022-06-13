#load "layout.fsx"
#r "../Fornax.Nfdi4Plants/bin/Debug/net5.0/Fornax.Nfdi4Plants.dll"

open Html
open Fornax.Nfdi4Plants

let generate' (ctx : SiteContents) (page: string) =
    let doc =
        ctx.TryGetValues<DocsData> ()
        |> Option.defaultValue Seq.empty
        |> Seq.find (fun n -> n.file = page)

    Layout.layout ctx doc.title [
        Layout.docsLayout doc
    ]

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page
    |> Layout.render ctx