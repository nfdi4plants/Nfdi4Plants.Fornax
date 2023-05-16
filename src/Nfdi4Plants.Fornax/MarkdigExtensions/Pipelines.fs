namespace Fornax.Nfdi4Plants.MarkdigExtensions

module Pipelines =

    open Markdig
    open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiCode
    open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiHeader
    open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiSidebarElementHeader

    let markdownPipeline =
        MarkdownPipelineBuilder()
            .UseAdvancedExtensions()
            .UseEmojiAndSmiley()
            .UseNFDIHeader()
            .UseNFDICodeBlock()
            .Build()

    let sidebarMarkdownPipeline(productionBasePath: string option) =
        if productionBasePath.IsSome then
            MarkdownPipelineBuilder()
                .UseSidebarHeader(productionBasePath.Value)
                .Build()
        else
            MarkdownPipelineBuilder()
                .UseSidebarHeader()
                .Build()