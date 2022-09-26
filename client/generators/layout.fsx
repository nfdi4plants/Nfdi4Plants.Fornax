#r "../_lib/Fornax.Core.dll"
#if !FORNAX
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

let layout (ctx : SiteContents) (activePageTitle: string) bodyCnt =
    let siteInfo = ctx.TryGetValue<Globalloader.SiteInfo> ()
    let ttl =
        siteInfo
        |> Option.map (fun si ->
            if activePageTitle <> "" then
                si.title + " - " + activePageTitle
            else
                si.title
        )
        |> Option.defaultValue ""

    html [Class "has-navbar-fixed-top"; HtmlProperties.Style [CSSProperties.Custom("scroll-behavior", "smooth")]] [
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
                        font-size: 1rem;
                    }

                    table {
                        display: block;
                        overflow: scroll
                    }

                    nfdi-toc, nfdi-body {
                        --outside-background-color: rgb(240, 243, 246);
                        --header-color: rgb(10, 12, 16)
                        --element-text-color: #0E1116;
                        --element-background-color: #fff;
                        --accent-text-color: rgb(31, 194, 167);
                        --link-color: #4FB3D9;
                        --link-hover-color: #8ad3ee;
                    }

                """
            ]

        ]
        custom "nfdi-navbar" [] []
        body [] [
          yield! bodyCnt
        ]
        custom "nfdi-footer" [] []
    ]

open Docsloader
open Fornax

let render (ctx : SiteContents) cnt =
    let disableLiveRefresh = ctx.TryGetValue<DocsConfig> () |> Option.map (fun n -> n.disableLiveRefresh) |> Option.defaultValue false
    cnt
    |> HtmlElement.ToString
    |> fun n -> if disableLiveRefresh then n else injectWebsocketCode n

let docsLayout (docs: Nfdi4Plants.Docs) =
    // just an example url
    Nfdi4Plants.Components.docsLayout("https://github.com/nfdi4plants/nfdi4plants.github.io/tree/main/src/", docs)
