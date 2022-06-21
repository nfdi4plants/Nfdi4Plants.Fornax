module Tests.MarkdigExtensions.Nfdi4PlantsCodeBlock

open Expecto
open Fornax.Nfdi4Plants
open Fornax.Nfdi4Plants.MarkdigExtensions.NfdiCode
open Markdig

let pipeline = 
    let builder = new MarkdownPipelineBuilder()
    builder
        .UseAdvancedExtensions()
        .UseEmojiAndSmiley()
        .UseNFDICodeBlock()
        .Build()

[<Tests>]
let tests = 
    testList "UseNFDICodeBlock" [
        test "basic case" {
            let markdown = """Here is some inline `code`!"""
            let result = Markdown.ToHtml(markdown, pipeline)
            Expect.equal result $"""<p>Here is some inline <code>code</code>!</p>{'\010'}""" ""
        }
        test "Fenced code block, no language" {
            let markdown = """Test line
```
let someCode = 42
```
"""
            let result = Markdown.ToHtml(markdown, pipeline)
            let expected = $"""<p>Test line</p>{'\010'}<nfdi-code>let someCode = 42</nfdi-code>{'\010'}"""
            Expect.equal result expected ""
        }
        test "Fenced code block" {
            let markdown = """Test line
```fsharp
let someCode = 42
```
"""
            let result = Markdown.ToHtml(markdown, pipeline)
            let expected = $"""<p>Test line</p>{'\010'}<nfdi-code class="language-fsharp">let someCode = 42</nfdi-code>{'\010'}"""
            Expect.equal result expected ""
        }
    ]