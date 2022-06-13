module Tests.MarkdigExtensions.Nfdi4PlantsHeader

open Expecto
open Fornax.Nfdi4Plants
open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiHeader
open Markdig

let pipeline = 
    let builder = new MarkdownPipelineBuilder()
    builder
        .UseAdvancedExtensions()
        .UseEmojiAndSmiley()
        .UseNFDIHeader()
        .Build()

[<Tests>]
let tests = 
    testList "UseNFDIHeader" [
        test "basic case" {
            let markdown = """# Start testing!"""
            let result = Markdown.ToHtml(markdown, pipeline)
            Expect.equal result $"""<nfdi-h1 id="start-testing">Start testing!</nfdi-h1>{'\010'}""" ""
        }
        test "5 depth case" {
            let markdown = """##### Start testing!"""
            let result = Markdown.ToHtml(markdown, pipeline)
            Expect.equal result $"""<nfdi-h5 id="start-testing">Start testing!</nfdi-h5>{'\010'}""" ""
        }
        test "6 depth case" {
            let markdown = """###### Start testing!"""
            let result = Markdown.ToHtml(markdown, pipeline)
            Expect.equal result $"""<nfdi-h6 id="start-testing">Start testing!</nfdi-h6>{'\010'}""" ""
        }
    ]