module Tests.MarkdigExtensions.Nfdi4PlantsSidebarHeader

open Expecto
open Fornax.Nfdi4Plants
open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiSidebarElementHeader
open Markdig

let pipeline = 
    let builder = new MarkdownPipelineBuilder()
    builder
        .UseSidebarHeader()
        .Build()

[<Tests>]
let tests = 
    testList "UseSidebarHeader" [
        test "basic case" {
            let markdown = """# Start testing!:#start-testing"""
            let result = Markdown.ToHtml(markdown, pipeline)
            Expect.equal result $"""<h1 slot="inner" href="#start-testing">Start testing!</h1>{'\010'}""" ""
        }
        test "base case without link" {
            let markdown = """# Start testing!"""
            let result = Markdown.ToHtml(markdown, pipeline)
            Expect.equal result $"""<h1 slot="inner">Start testing!</h1>{'\010'}""" ""
        }
        test "6 depth case" {
            let markdown = """###### Start testing!"""
            let result = Markdown.ToHtml(markdown, pipeline)
            Expect.equal result $"""<h3 slot="inner">Start testing!</h3>{'\010'}""" ""
        }
    ]