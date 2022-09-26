module ReleaseNotesTasks

open Fake.Extensions.Release
open BlackFox.Fake

let createAssemblyVersion = BuildTask.create "createvfs" [] {
    AssemblyVersion.create ProjectInfo.project
}

let updateReleaseNotes = BuildTask.createFn "ReleaseNotes" [] (fun config ->
    ReleaseNotes.ensure()

    ReleaseNotes.update(ProjectInfo.gitOwner, ProjectInfo.project, config)

    let semVer = 
        Fake.Core.ReleaseNotes.load "RELEASE_NOTES.md"
        |> fun x -> x.SemVer.AsString

    // Update Version in src/Nfdi4Plants.Fornax.Template/package.json
    let p = "src/Nfdi4Plants.Fornax.Template/content/package.json"
    let t = System.IO.File.ReadAllText p
    let tNew = System.Text.RegularExpressions.Regex.Replace(t, """\"version\": \".*\",""", sprintf "\"version\": \"%s\"," semVer )
    System.IO.File.WriteAllText(p, tNew)
)

let githubDraft = BuildTask.createFn "GithubDraft" [] (fun config ->

    let body = "We are ready to go for the first release!"

    Github.draft(
        ProjectInfo.gitOwner,
        ProjectInfo.project,
        (Some body),
        None,
        config
    )
)