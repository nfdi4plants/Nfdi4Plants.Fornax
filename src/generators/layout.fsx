#r "../_lib/Fornax.Core.dll"
#if !FORNAX
// #load "../loaders/postloader.fsx"
#load "../loaders/docsloader.fsx"
#load "../loaders/pageloader.fsx"
#load "../loaders/globalloader.fsx"
#endif

open Html

let injectWebsocketCode (webpage:string) =
    let websocketScript =
        """
        <script type="text/javascript">
          var wsUri = "ws://localhost:8080/websocket";
      function init()
      {
        websocket = new WebSocket(wsUri);
        websocket.onclose = function(evt) { onClose(evt) };
      }
      function onClose(evt)
      {
        console.log('closing');
        websocket.close();
        document.location.reload();
      }
      window.addEventListener("load", init, false);
      </script>
        """
    let head = "<head>"
    let index = webpage.IndexOf head
    webpage.Insert ( (index + head.Length + 1),websocketScript)

let layout (ctx : SiteContents) active bodyCnt =
    let pages = ctx.TryGetValues<Pageloader.Page> () |> Option.defaultValue Seq.empty
    let siteInfo = ctx.TryGetValue<Globalloader.SiteInfo> ()
    let ttl =
      siteInfo
      |> Option.map (fun si -> si.title)
      |> Option.defaultValue ""

    html [Class "has-navbar-fixed-top"] [
        head [] [
            meta [CharSet "utf-8"]
            meta [Name "viewport"; Content "width=device-width, initial-scale=1"]
            title [] [!! ttl]
            link [Rel "icon"; Type "image/png"; Sizes "32x32"; Href "/images/favicon.png"]
            link [Rel "stylesheet"; Href "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"]
            link [Rel "stylesheet"; Href "https://fonts.googleapis.com/css?family=Open+Sans"]
            link [Rel "stylesheet"; Type "text/css"; Href "/style/style.css"]
            link [Rel "stylesheet"; Type "text/css"; Href "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"]
            script [ Type "module"; Src "/js/bundle.js"] []
            style [] [
                !! """
                body {
                  margin: 0px;
                }

                thead tr th, strong {
                    color: var(--accent-text-color) !important
                }

                a {
                  color: var(--link-color, #4FB3D9) !important;
                }

                a:hover {
                  color: var(--link-hover-color, #3A3A3A) !important;
                }
                thead {
                  font-size: 1.2rem;
                }
             """

                // nfdi-navbar, nfdi-footer, nfdi-toc, nfdi-body {
                //   --element-background-color: black;
                //   --element-text-color: white;
                //   --link-color: #4FB3D9;
                //   --link-hover-color: #84cae4;
                //   --header-color: white;
                //   --outside-background-color: #191919;
                //   --accent-text-color: #1FC2A7
                // }

            ]

        ]
        custom "nfdi-navbar" [] []
        body [] [
          yield! bodyCnt
        ]
        custom "nfdi-footer" [] []
    ]

let render (ctx : SiteContents) cnt =
  let disableLiveRefresh = ctx.TryGetValue<Docsloader.DocsConfig> () |> Option.map (fun n -> n.disableLiveRefresh) |> Option.defaultValue false
  cnt
  |> HtmlElement.ToString
  |> fun n -> if disableLiveRefresh then n else injectWebsocketCode n


let docsLayout (docs: Docsloader.Docs) =
    custom "nfdi-body" [Class "content"; if Array.isEmpty docs.sidebar |> not then HtmlProperties.Custom("hasSidebar", "true")] [
        if Array.isEmpty docs.sidebar |> not then 
            for sidebarEle in docs.sidebar do
                custom "nfdi-sidebar-element" [HtmlProperties.Custom ("slot", "sidebar"); HtmlProperties.Custom ("isActive","true") ] [
                    div [HtmlProperties.Custom ("slot", "title")] [!! sidebarEle.Title]
                    !! sidebarEle.Content
                ]
        custom "nfdi-h1" [] [!! docs.title]
        if docs.add_toc then custom "nfdi-toc" [] []
        !! docs.content
    ]

let docsMinimalLayout (docs: Docsloader.Docs) =
  div [Class "tile is-4 is-parent"] [
    div [Class "tile is-child box"] [
      p [Class "title"] [ a [Href docs.link] [!! docs.title] ]
      p [] [ !! $"""by {docs.author.Value}, {docs.published.Value.ToString("yyyy-MM-dd")}""" ]
    ]
  ]