namespace Fornax.Nfdi4Plants.SubComponents

open Html

type PagefindSearchbar = class end
    with
    static member create (?productionBasePath: string) =
        let appendBasePath (url: string) = 
            let p = Option.defaultValue "" productionBasePath
            p.TrimEnd([|'/'; '\\'|]) + url
        div [HtmlProperties.Custom("slot","searchbar")] [
            link [Href <| appendBasePath "/_pagefind/pagefind-ui.css"; Rel "stylesheet"]
            script [Src <| appendBasePath "/_pagefind/pagefind-ui.js"; Type "text/javascript"] []
            div [Id "search"] []
            script [] [
                !!"""window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ element: "#search" });
});"""
            ]
        ]
    

