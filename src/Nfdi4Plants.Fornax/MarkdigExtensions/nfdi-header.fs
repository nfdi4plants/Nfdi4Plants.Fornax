namespace Fornax.Nfdi4Plants.MarkdigExtensions

// https://odetocode.com/blogs/scott/archive/2020/01/23/a-custom-renderer-extension-for-markdig.aspx
// https://github.com/arthurrump/MarkdigExtensions/blob/master/src/MarkdigExtensions.ImageAsFigure/ImageAsFigure.fs

open Markdig.Renderers
open Markdig
open Markdig.Renderers.Html
open Markdig.Syntax

module NfdiHeader =

    open System

    type NFDIHeaderRenderer() =
        inherit HeadingRenderer()

        override __.Write(renderer : HtmlRenderer, hb : HeadingBlock ) =

            let headingTexts = [|
                "nfdi-h1";
                "nfdi-h2";
                "nfdi-h3";
                "nfdi-h4";
                "nfdi-h5";
                "nfdi-h6";
            |]
            let index = hb.Level - 1
            let headingText =
                if index < headingTexts.Length then
                    headingTexts[index]
                else
                    // this cannot hit, as any heading with level > 6 will not be rendered as heading, but as <p>
                    headingTexts.[headingTexts.Length-1]

            if (renderer.EnableHtmlForBlock) then
                renderer.Write('<') |> ignore
                renderer.Write(headingText) |> ignore
                renderer.WriteAttributes(hb) |> ignore
                renderer.Write('>') |> ignore
            
            // renderer.WriteLeafRawLines(hb, true, true, true) |> ignore
            renderer.WriteLeafInline(hb) |> ignore

            if (renderer.EnableHtmlForBlock) then
                renderer.Write("</") |> ignore
                renderer.Write(headingText) |> ignore
                renderer.WriteLine(">") |> ignore
    
            renderer.EnsureLine() |> ignore

    /// 
    type NFDIHeaderExtension() =

        interface IMarkdownExtension with

            member __.Setup(_) = ()

            member __.Setup(_, renderer) = 
                renderer.ObjectRenderers.ReplaceOrAdd<HeadingRenderer>(new NFDIHeaderRenderer()) |> ignore

    open System.Runtime.CompilerServices

    [<Extension>]
    type MarkdownPipelineBuilderExtensions() =
        [<Extension>]
        // <summary>Highlight code in fenced code blocks</summary>
        // <param name="pipeline">The Markdig <see cref="MarkdownPipelineBuilder"/> to add the extension to</param>
        static member UseNFDIHeader(pipeline : MarkdownPipelineBuilder) =
            pipeline.Extensions.Add(NFDIHeaderExtension())
            pipeline