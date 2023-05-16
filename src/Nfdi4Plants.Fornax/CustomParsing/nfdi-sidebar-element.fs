namespace Fornax.Nfdi4Plants.CustomParsing

module SidebarElement =

    open Html
    open Fornax.Nfdi4Plants.MarkdigExtensions

    type SidebarElement = {
        Title: string
        Content: string
    }

    let read (productionBasePath: string option) (contentArr: string []) =
        contentArr 
        |> List.ofArray 
        |> List.fold (fun acc line -> 
            // opens new sidebar element with title
            // ` = '\096'
            if line.Trim() = "```" then 
                acc
            elif line.StartsWith "```" then
                // get sidebar element title
                let title = line.Replace("`", "").Trim()
                // add to list collection with empty list.
                // empty list will be used to add all related lines
                (title, List.empty)::acc
            elif line.Trim() <> "" then
                // match with list collection to check if it is empty (should not be empty, this is error prediction)
                match acc with
                // if has element, add line to sidebar element
                | h::t -> (fst h, line::snd h)::t
                // if is empty add sidebar placeholder
                | [] -> ("Sidebar", line::[])::acc
            else 
                acc
        ) []
        |> List.map (fun (title, lines) ->
            let c = lines |> List.rev |> String.concat "\n"
            {
                Title = title
                Content = Markdig.Markdown.ToHtml(c, Pipelines.sidebarMarkdownPipeline(productionBasePath))
            }
        )
        |> List.rev
        |> Array.ofList

    let write (eleArr: SidebarElement []) =
        [
            for sidebarEle in eleArr do
                yield custom "nfdi-sidebar-element" [HtmlProperties.Custom ("slot", "sidebar"); HtmlProperties.Custom ("isActive","true") ] [
                    div [HtmlProperties.Custom ("slot", "title")] [!! sidebarEle.Title]
                    !! sidebarEle.Content
                ]
        ]
    

