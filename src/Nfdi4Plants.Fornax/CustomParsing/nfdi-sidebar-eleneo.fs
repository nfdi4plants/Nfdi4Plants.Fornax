namespace Fornax.Nfdi4Plants.CustomParsing

module SidebarEleneo =
    
    open System.Text.RegularExpressions

    type SidebarEleneo = {
        Main: string
        Children: SidebarEleneo list
    } with
        static member markdownLinkPattern = @"^\[(?<innerhtml>.*)\]\((?<href>.*)\)"
        member this.mainToLink = 
            let pre_content = this.Main.TrimStart([|'#'|]).Trim()
            let regex = Regex.Match(pre_content, SidebarEleneo.markdownLinkPattern)
            {|innerHtml = regex.Groups.["innerhtml"].Value; href = regex.Groups.["href"].Value|}
        static member create(main: string, ?children) = {
            Main = main
            Children = Option.defaultValue [] children
        }

    module HelperRead = 
        type SortingType = {
            Hashcount: int
            Content: string
            Children: SortingType list
        } with
            static member create (count, c, ?children) = {
                Hashcount = count
                Content = c
                Children = Option.defaultValue [] children
            } 

        let filterNonHashContent (contentArr: string []) =
            contentArr 
            |> Array.filter (fun x -> x.StartsWith "#")
            |> Array.map (fun x -> x.Trim())

        let inline splitSeq (array: seq<'T>) (predicate: 'T -> bool) =
            array
            |> Seq.fold (fun (current, result) ele -> 
                let isNew = predicate ele
                match current, isNew with
                | [], true ->
                    [ele], result
                | _, true ->
                    [ele], (List.rev current)::result
                | _, false ->
                    ele::current, result
            ) ([],[])
            |> fun (current, result) -> (List.rev current)::result
            |> List.rev

        let sortMarkdown (contentArr: string []) =
            let countHashes (str: string) = str |> Seq.takeWhile ((=) '#') |> Seq.length
            let prepare = contentArr |> Array.map (fun x -> SortingType.create(countHashes x, x)) |> List.ofArray
            let rec sort (inp: SortingType list) =
                let nextLowestLevel = inp |> List.minBy (fun st -> st.Hashcount) |> fun x -> x.Hashcount
                let subElements = splitSeq inp (fun x -> x.Hashcount = nextLowestLevel)
                subElements
                |> List.map (fun sublist ->
                    match sublist with
                    | head::[] ->
                        SidebarEleneo.create(head.Content)    
                    | head::tail ->
                        let children = sort tail
                        SidebarEleneo.create(head.Content, children)
                    | [] -> failwith "Should never return empty list."
                )
            sort prepare


    module HelperWrite = 

        open Html

        let rec sidebarEleneoToHtml (productionBasePath: string option) (isRoot:bool) (ele:SidebarEleneo) =
            let linkInfo = ele.mainToLink
            let href = 
                match productionBasePath, linkInfo.href with
                | Some baseUrl, s when s.StartsWith("/") ->
                    "/" + baseUrl.Trim([|'/'|]) + "/" + s.Trim([|'/'|])
                | Some baseUrl, s when s.StartsWith("./") ->
                    "./" + baseUrl.Trim([|'/'|]) + "/" + s.Trim([|'/'; '.'|])
                | _, s -> s
            let hasChildren = List.isEmpty ele.Children |> not
            // not root and no children
            let link = 
                a [
                    if ((not hasChildren) && (not isRoot)) then HtmlProperties.Custom ("slot", "child")
                    Href href
                ] [
                    !!linkInfo.innerHtml
                ]
            // root must always be sidebar-eleneo element.
            if hasChildren || isRoot then
                custom "nfdi-sidebar-eleneo" [ 
                    if isRoot then HtmlProperties.Custom ("slot", "sidebar") else HtmlProperties.Custom ("slot", "child")
                ] [
                    link
                    yield! ele.Children |> List.map (fun x -> sidebarEleneoToHtml productionBasePath false x)
                ]
            else
                link

    let read (content: string []) =
        if Array.isEmpty content then failwith "Could not find any content for sidebar"
        content
        |> HelperRead.filterNonHashContent
        |> HelperRead.sortMarkdown

    let write (productionBasePath: string option) (isRoot:bool) (ele:SidebarEleneo) =
        HelperWrite.sidebarEleneoToHtml productionBasePath isRoot ele


