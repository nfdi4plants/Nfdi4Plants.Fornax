namespace Fornax.Nfdi4Plants.SubComponents

open Html

type PagefindSearchbar = class end
    with
    static member create (?productionBasePath: string) =
        let productionBasePath = Option.bind (fun (p: string) -> "/" + p.Trim([|'/'; '\\'|]) |> Some) productionBasePath
        let appendBasePath (url: string) = 
            if productionBasePath.IsSome then
               productionBasePath.Value + url
            else
                url
        /// This is used to append links from searchresult
        let pagefindBasePath = if productionBasePath.IsSome then productionBasePath.Value else ""
        div [HtmlProperties.Custom("slot","searchbar")] [
            link [Href <| appendBasePath "/pagefind/pagefind-ui.css"; Rel "stylesheet"]
            script [Src <| appendBasePath "/pagefind/pagefind-ui.js"; Type "text/javascript"] []
            div [Id "search"] []
            script [] [
                !!(sprintf """window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ 
        element: "#search",
        baseUrl: "%s"
    });
});""" pagefindBasePath)
            ]
        ]
    

