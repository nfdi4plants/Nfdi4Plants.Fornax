module Loaders.Tests

open Expecto
open Fornax.Nfdi4Plants

open Aux

[<Tests>]
let getConfigTests = 
    testList "getConfig" [
        // Test whitespace after first separator
        // Test
        test "config_onlySeparators" {
            let test_case = """---
---"""
            let result = getConfig test_case
            Expect.equal result Array.empty ""
        }
        test "onlySeparators_plusWhitespace" {
            let test_case = """---      


---


"""
            let result = getConfig test_case
            Expect.equal result Array.empty ""
        }
        test "config_onlySeparators_plusWhitespace" {
            let test_case = """---      


---"""
            let result = getConfig test_case
            Expect.equal result Array.empty ""
        }
        test "config_title" {
            let test_case = """---      
title: My awesome title         
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.title "My awesome title" ""
        }
        test "config_add_support_default" {
            let test_case = """---    
title: My awesome title               
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.add_support true ""
        }
        test "config_add_support" {
            let test_case = """---        
title: My awesome title   
add support: false            
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.add_support false ""
        }
        test "config_add_toc_default" {
            let test_case = """---    
title: My awesome title               
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.add_toc true ""
        }
        test "config_add_toc" {
            let test_case = """---        
title: My awesome title   
add toc: false            
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.add_toc false ""
        }
        test "config_published_default" {
            let test_case = """---      
title: My awesome title         
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.published None ""
        }
        test "config_published_published" {
            let test_case = """---    
title: My awesome title    
published: 2022-05-09
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.published (Some <| System.DateTime(2022,05,09)) ""
        }
        test "config_published_date" {
            let test_case = """---    
title: My awesome title    
date: 2022-05-09
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.published (Some <| System.DateTime(2022,05,09)) ""
        }
        test "config_author_none" {
            let test_case = """---    
title: My awesome title    
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.authors [||] ""
        }
        test "config_author_baseCase" {
            let test_case = """---    
title: My awesome title    
author: Kevin Frey
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.authors [|Author.createNameOnly "Kevin Frey"|] ""
        }
        test "config_author_jsonObj_nameOnly" {
            let test_case = """---    
title: My awesome title    
author: {name: Kevin Frey}
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.authors [|Author.createNameOnly "Kevin Frey"|] ""
        }
        test "config_author_jsonObj" {
            let test_case = """---    
title: My awesome title    
author: {name: Kevin Frey, github: https://github.com/Freymaurer, orcid: 0000-0002-8510-6810 }
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.authors [|Author.create "Kevin Frey" (Some "https://github.com/Freymaurer") (Some "0000-0002-8510-6810")|] ""
        }
        test "config_author_jsonObj" {
            let test_case = """---    
title: My awesome title    
author: {name: Kevin Frey, github: https://github.com/Freymaurer, orcid: 0000-0002-8510-6810 }
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.authors [|Author.create "Kevin Frey" (Some "https://github.com/Freymaurer") (Some "0000-0002-8510-6810")|] ""
        }
        test "config_authors" {
            let test_case = """---    
title: My awesome title    
author: John Doe
author: {name: Kevin Frey, github: https://github.com/Freymaurer, orcid: 0000-0002-8510-6810 }
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            let expected = [|
                Author.createNameOnly "John Doe"
                Author.create "Kevin Frey" (Some "https://github.com/Freymaurer") (Some "0000-0002-8510-6810")
            |]
            Expect.equal docs.authors expected ""
        }
        test "config_authors_multiple_JSON" {
            let test_case = """---    
title: My awesome title    
author: {name: John Doe, github: https://github.com/JohnDoe, orcid: 0000-0000-0000-0000}
author: {name: Kevin Frey, github: https://github.com/Freymaurer, orcid: 0000-0002-8510-6810 }
author: Jane Doe
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            let expected = [|
                Author.create "John Doe" (Some "https://github.com/JohnDoe") (Some "0000-0000-0000-0000")
                Author.create "Kevin Frey" (Some "https://github.com/Freymaurer") (Some "0000-0002-8510-6810")
                Author.createNameOnly "Jane Doe"
            |]
            Expect.equal docs.authors expected ""
        }
        test "config_notCaseSensitive" {
            let test_case = """---    
tItle: My awesome title    
Author: {name: Kevin Frey}
---"""
            let config = getConfig test_case
            let docs = Docs.createFromConfig config
            Expect.equal docs.authors [|Author.createNameOnly "Kevin Frey"|] ""
        }
    ]
