namespace Fornax.Nfdi4Plants.MarkdigExtensions

open System.Text
open Markdig.Parsers;
open Markdig.Renderers;
open Markdig.Renderers.Html;
open Markdig.Syntax;
open Markdig

module NfdiCode =

    open System

        // https://github.com/ilich/Markdig.Prism/blob/main/src/Markdig.Prism/PrismCodeBlockRenderer.cs
    type NFDICodeBlockRenderer() =
        inherit HtmlObjectRenderer<CodeBlock>()

        //let extractSourcecode (node: LeafBlock) = 
        //    let code = new StringBuilder()
        //    let lines = node.Lines.Lines
        //    let totalLines = lines.Length
        //    let rec appendLines (counter: int) (c: StringBuilder) =
        //        if counter >= totalLines then
        //            c
        //        else
        //            let line = lines[counter]
        //            let slice = line.Slice
        //            if isNull slice.Text then
        //                appendLines (counter + 1) c
        //            else
        //                let lineText = slice.Text.Substring(slice.Start, slice.Length);
        //                if counter > 0 then 
        //                    appendLines (counter+1) (c.AppendLine().Append(lineText))
        //                else
        //                    appendLines (counter+1) (c.Append(lineText))
        //    appendLines 0 code
        //    |> fun x -> x.ToString()

        override this.Write(renderer : HtmlRenderer , cb : CodeBlock ) =

            if cb :? FencedCodeBlock && cb.Parser :? FencedCodeBlockParser then
                let fcb = cb :?> FencedCodeBlock
                let parser = cb.Parser :?> FencedCodeBlockParser
                let languageCode = fcb.Info.Replace(parser.InfoPrefix, "").Trim()
                if languageCode = "" then
                    renderer
                        .Write("<nfdi-code>")
                        .WriteLeafRawLines(cb, true, true, true)
                        .Write("</nfdi-code>")
                    |> ignore
                else
                    let attributes = new HtmlAttributes()
                    attributes.AddClass($"language-{languageCode}")
                    
                    renderer
                        .Write("<nfdi-code")
                        .WriteAttributes(attributes)
                        .Write(">")
                        .WriteLeafRawLines(cb, true, true, true)
                        .Write("</nfdi-code>")
                    |> ignore
                renderer.EnsureLine() |> ignore
            else
                // let codeBlockRenderer = new CodeBlockRenderer()
                renderer.Write(cb) |> ignore

    /// An extension for Markdig that highlights syntax in fenced code blocks
    type NFDICodeExtension() =

        interface IMarkdownExtension with

            member __.Setup(_) = ()

            member __.Setup(_, renderer) = 
                renderer.ObjectRenderers.ReplaceOrAdd<CodeBlockRenderer>(new NFDICodeBlockRenderer()) |> ignore

    open System.Runtime.CompilerServices

    [<Extension>]
    type MarkdownPipelineBuilderExtensions() =
        [<Extension>]
        // <summary>Highlight code in fenced code blocks</summary>
        // <param name="pipeline">The Markdig <see cref="MarkdownPipelineBuilder"/> to add the extension to</param>
        static member UseNFDICodeBlock(pipeline : MarkdownPipelineBuilder) =
            pipeline.Extensions.Add(NFDICodeExtension())
            pipeline