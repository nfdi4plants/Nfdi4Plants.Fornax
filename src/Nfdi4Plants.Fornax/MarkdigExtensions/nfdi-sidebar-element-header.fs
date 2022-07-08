namespace Fornax.Nfdi4Plants.MarkdigExtensions

open Markdig.Renderers
open Markdig
open Markdig.Renderers.Html
open Markdig.Syntax

open System

module internal Aux =

    let splitKey (line: string) =
        let seperatorIndex = line.IndexOf(':')
        if seperatorIndex > 0 then
            let key = line.[.. seperatorIndex - 1].Trim()
            let value = line.[seperatorIndex + 1 ..].Trim()
            key, Some value
        else
            line, None

module NfdiSidebarElementHeader =

    type SidebarHeaderRenderer(?productionBasePath: string) =
        inherit HeadingRenderer()

        override __.Write(renderer : HtmlRenderer, hb : HeadingBlock ) =

            let headingTexts = [|
                "h1";
                "h2";
                "h3";
            |]
            let index = hb.Level - 1
            let headingText =
                if index < headingTexts.Length then
                    headingTexts[index]
                else
                    headingTexts.[headingTexts.Length-1]
            let innerText, href = 
                let s = String.concat "" [for i in hb.Inline do yield i.ToString()]
                Aux.splitKey s

            let attr = hb.GetAttributes()
            attr.AddProperty("slot", "inner")

            if href.IsSome then 
                let nextHref = if productionBasePath.IsSome then "/" + productionBasePath.Value.Trim([|'/'|]) + "/" + href.Value.Trim([|'/'|]) else href.Value
                attr.AddProperty("href", nextHref)

            if (renderer.EnableHtmlForBlock) then
                renderer.Write('<') |> ignore
                renderer.Write(headingText) |> ignore
                renderer.WriteAttributes(hb) |> ignore
                renderer.Write('>') |> ignore
            
            renderer.Write(innerText) |> ignore

            if (renderer.EnableHtmlForBlock) then
                renderer.Write("</") |> ignore
                renderer.Write(headingText) |> ignore
                renderer.WriteLine(">") |> ignore
    
            renderer.EnsureLine() |> ignore

    /// An extension for Markdig that highlights syntax in fenced code blocks
    type SidebarHeaderExtension(?productionBasePath: string) =

        interface IMarkdownExtension with

            member __.Setup(_) = ()

            member __.Setup(_, renderer) = 
                let x = if productionBasePath.IsSome then new SidebarHeaderRenderer(productionBasePath.Value) else new SidebarHeaderRenderer()
                renderer.ObjectRenderers.ReplaceOrAdd<HeadingRenderer>(x) |> ignore

    open System.Runtime.CompilerServices

    [<Extension>]
    type MarkdownPipelineBuilderExtensions() =
        [<Extension>]
        // <summary>Highlight code in fenced code blocks</summary>
        // <param name="pipeline">The Markdig <see cref="MarkdownPipelineBuilder"/> to add the extension to</param>
        static member UseSidebarHeader(pipeline : MarkdownPipelineBuilder, ?productionBasePath) =
            let x = if productionBasePath.IsSome then SidebarHeaderExtension(productionBasePath.Value) else SidebarHeaderExtension()
            printfn "HIT: %A" productionBasePath
            pipeline.Extensions.Add(x)
            pipeline