#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html
open Fornax
open Docsloader

let generate' (ctx : SiteContents) (page: string) =
    let doc =
        ctx.TryGetValues<Nfdi4Plants.Docs> ()
        |> Option.defaultValue Seq.empty
        |> Seq.findBack (fun n -> n.file = page)

    Layout.layout ctx doc.title [
        Layout.docsLayout doc
    ]

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page
    |> Layout.render ctx