namespace Fornax.Nfdi4Plants

open Html
open Docs

module Components =

    /// <summary>Creates nfdi-webcomponent layout for documentation.</summary>
    /// <param name="contentGithubUrl">Base path of fornax client. Is used to generate "Edit this page"-link</param>
    /// <param name="docs">`DocsData` from generated by loaders.</param>
    /// <returns>Returns `HtmlElement`. Best put as direct child of `&lt;body&gt;` element.</returns>
    let docsLayout (contentGithubUrl:string) (docs: DocsData) =
        let publishedDate = docs.published.Value.ToString("yyyy-MM-dd")
        let sidebar = [
            if Array.isEmpty docs.sidebar |> not then 
                for sidebarEle in docs.sidebar do
                    yield custom "nfdi-sidebar-element" [HtmlProperties.Custom ("slot", "sidebar"); HtmlProperties.Custom ("isActive","true") ] [
                        div [HtmlProperties.Custom ("slot", "title")] [!! sidebarEle.Title]
                        !! sidebarEle.Content
                    ]
            else ()
        ]
        custom "nfdi-body" [Class "content"; if Array.isEmpty docs.sidebar |> not then HtmlProperties.Custom("hasSidebar", "true")] [
            yield! sidebar
            
            h1 [Class "front-header"] [!! docs.title]
            i [Class "help" ] [!! $"last updated at {publishedDate}" ]

            if docs.add_toc then custom "nfdi-toc" [] []
            !! docs.content

            // support contact
            h3 [] [!! "Dataplant Support"]
            div [] [
                !! "Besides these technical solutions, DataPLANT supports you with community-engaged data stewardship. For further assistance, feel free to reach out via our "
                a [Href "https://support.nfdi4plants.org"] [!! "helpdesk"]
                !! " or by contacting us " 
                a [Href "javascript:location='mailto:\u0069\u006e\u0066\u006f\u0040\u006e\u0066\u0064\u0069\u0034\u0070\u006c\u0061\u006e\u0074\u0073\u002e\u006f\u0072\u0067';void 0"] [!! "directly"]
                !! "."
            ]

            // Edit this page link
            // https://github.com/nfdi4plants/nfdi4plants.github.io/tree/main/src/
            let editUrl = System.IO.Path.Combine(contentGithubUrl, docs.file)
            div [] [
                a [
                    Target "_blank"
                    Href editUrl; 
                    HtmlProperties.Style [MarginLeft "auto"; Display "block"; CSSProperties.Width "130px"]
                ] [!! "✏️ Edit this page"]
            ]
        ]