module Tests.CustomParsing.nfdi_sidebar_eleneo

open Expecto

module TestMarkdown =
    let markdown = """
---
published: 2022-05-09
Article Status: Publishable
To-Dos: 
    - Update links to other KB articles
---

# [Metadata](/docs/metadata.html)
## [What is metadata?](/docs/metadata.html#what-is-metadata)
## [Where does metadata come from?](/docs/metadata.html#where-does-metadata-come-from)
## [Why do I benefit from metadata?](/docs/metadata.html#why-do-i-benefit-from-metadata)
## [What tasks are important for rich metadata?](/docs/metadata.html#what-tasks-are-important-for-rich-metadata)
### [Collection](/docs/metadata.html#collection)
### [Structuring](/docs/metadata.html#structuring)
### [Sharing and curation](/docs/metadata.html#sharing-and-curation)
## [How does DataPLANT support me in metadata annotation](/docs/metadata.html#how-does-dataplant-support-me-in-metadata-annotation)
## [DataPLANT Support](/docs/metadata.html#dataplant-support)
# [Test 1](/path/any)
# [Test 1](/path/any)
## [Test 2](/path/any)
## [Test 2](/path/any)
## [Test 2](/path/any)
### [Test 3](/path/any)
#### [Test 4](/path/any)
##### [Test 5](/path/any)
""" 

    let minimal = """
# [Test 1.1](/path/any)
# [Test 1.2](/path/any)
## [Test 2.1](/path/any)
## [Test 2.2](/path/any)
## [Test 2.3](/path/any)
### [Test 3](/path/any)
#### [Test 4](/path/any)
##### [Test 5](/path/any)
"""
    let minimal_mixed = """
# [Test 1.1](/path/any)
# [Test 1.2](/path/any)
## [Test 2.3](/path/any)
### [Test 3](/path/any)
#### [Test 4](/path/any)
##### [Test 5](/path/any)
## [Test 2.1](/path/any)
## [Test 2.2](/path/any)
"""

open Fornax.Nfdi4Plants.CustomParsing.SidebarEleneo

let main =
    let prep (mdString: string) = mdString.Trim().Split('\n', System.StringSplitOptions.RemoveEmptyEntries) |> Array.map (fun x -> x.Trim())
    testList "Sidebar" [
        testList "Read" [
            test "splitSeq" {
                let testValue = [|1;2;2;2;3;5;1;1;2;3;2|]
                let actual = HelperRead.splitSeq testValue (fun x -> x = 1)
                let expectedLength = 3
                let first = [1;2;2;2;3;5]
                let snd = [1]
                let thrd = [1;2;3;2]
                Expect.hasLength actual expectedLength "expectedLength"
                Expect.equal (List.item 0 actual) first "first"
                Expect.equal (List.item 1 actual) snd "snd"
                Expect.equal (List.item 2 actual) thrd "thrd"
            }
            test "sortMarkdown" {
                let testValue = TestMarkdown.minimal
                let actual = prep testValue |> HelperRead.sortMarkdown |> Array.ofList
                let expectedCount = 2
                let expected = [|
                    SidebarEleneo.create("# [Test 1.1](/path/any)")
                    SidebarEleneo.create("# [Test 1.2](/path/any)",[
                        SidebarEleneo.create("## [Test 2.1](/path/any)")
                        SidebarEleneo.create("## [Test 2.2](/path/any)")
                        SidebarEleneo.create("## [Test 2.3](/path/any)",[
                            SidebarEleneo.create("### [Test 3](/path/any)",[
                                SidebarEleneo.create("#### [Test 4](/path/any)",[
                                    SidebarEleneo.create("##### [Test 5](/path/any)")
                                ])
                            ])
                        ])
                    ])
                |]
                Expect.hasLength actual expectedCount "count"
                Expect.isEmpty actual.[0].Children "no children in first sublist"
                Expect.sequenceEqual actual expected "equal"
            }
            test "sortMarkdown_mixed" {
                let testValue = TestMarkdown.minimal_mixed
                let actual = prep testValue |> HelperRead.sortMarkdown |> Array.ofList
                let expectedCount = 2
                let expected = [|
                    SidebarEleneo.create("# [Test 1.1](/path/any)")
                    SidebarEleneo.create("# [Test 1.2](/path/any)",[
                        SidebarEleneo.create("## [Test 2.3](/path/any)",[
                            SidebarEleneo.create("### [Test 3](/path/any)",[
                                SidebarEleneo.create("#### [Test 4](/path/any)",[
                                    SidebarEleneo.create("##### [Test 5](/path/any)")
                                ])
                            ])
                        ])
                        SidebarEleneo.create("## [Test 2.1](/path/any)")
                        SidebarEleneo.create("## [Test 2.2](/path/any)")
                    ])
                |]
                        
                Expect.hasLength actual expectedCount "count"
                Expect.isEmpty actual.[0].Children "no children in first sublist"
                Expect.sequenceEqual actual expected "equal"
            }
        ]
        testList "Write" [
            let sidebarEle = [|
                SidebarEleneo.create("# [Test 1.1](/path/any)")
                SidebarEleneo.create("# [Test 1.2](/path/any)",[
                    SidebarEleneo.create("## [Test 2.3](/path/any)",[
                        SidebarEleneo.create("### [Test 3](/path/any)",[
                            SidebarEleneo.create("#### [Test 4](/path/any)",[
                                SidebarEleneo.create("##### [Test 5](/path/any)")
                            ])
                        ])
                    ])
                    SidebarEleneo.create("## [Test 2.1](/path/any)")
                    SidebarEleneo.create("## [Test 2.2](/path/any)")
                ])
            |]
            let readIn = sidebarEle |> Array.map (write true)
            test "toString-first" {
                let actual_first = readIn.[0] |> HtmlElement.ToString
                let expected_first = $"""<nfdi-sidebar-eleneo slot="sidebar">
  <a href="/path/any">
    Test 1.1
  </a>
</nfdi-sidebar-eleneo>"""
                Expect.equal (actual_first.Trim()) (expected_first.Trim().Replace(string '\013',"")) "first"
            }
            test "toString-second" {
                let actual_second = readIn.[1] |> HtmlElement.ToString
                let expected_second = """<nfdi-sidebar-eleneo slot="sidebar">
  <a href="/path/any">
    Test 1.2
  </a>
  <nfdi-sidebar-eleneo slot="child">
    <a href="/path/any">
      Test 2.3
    </a>
    <nfdi-sidebar-eleneo slot="child">
      <a href="/path/any">
        Test 3
      </a>
      <nfdi-sidebar-eleneo slot="child">
        <a href="/path/any">
          Test 4
        </a>
        <a slot="child" href="/path/any">
          Test 5
        </a>
      </nfdi-sidebar-eleneo>
    </nfdi-sidebar-eleneo>
  </nfdi-sidebar-eleneo>
  <a slot="child" href="/path/any">
    Test 2.1
  </a>
  <a slot="child" href="/path/any">
    Test 2.2
  </a>
</nfdi-sidebar-eleneo>"""
                Expect.equal (actual_second.Trim()) (expected_second.Trim().Replace(string '\013',"")) "second"
            }
        ]
    ]