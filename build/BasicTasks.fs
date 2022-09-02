module BasicTasks

open BlackFox.Fake
open Fake.IO
open Fake.DotNet
open Fake.IO.Globbing.Operators
open System.IO

open ProjectInfo

let setPrereleaseTag = BuildTask.create "SetPrereleaseTag" [] {
    printfn "Please enter pre-release package suffix"
    let suffix = System.Console.ReadLine()
    prereleaseSuffix <- suffix
    prereleaseTag <- (sprintf "%s-%s" release.NugetVersion suffix)
    isPrerelease <- true
}

let clean = BuildTask.create "Clean" [] {
    !! "src/**/bin"
    ++ "src/**/obj"
    ++ "tests/**/bin"
    ++ "tests/**/obj"
    ++ "pkg"
    |> Shell.cleanDirs 
}

let build = BuildTask.create "Build" [clean] {
    //solutionFile
    //|> DotNet.build
    let srcFolder = "src"
    let projects = 
        Directory.GetFiles(
            srcFolder, 
            "*.fsproj", 
            new EnumerationOptions() |> fun x -> x.RecurseSubdirectories <- true; x
        )
        // need to remove template project. Would error otherwise because of NoBuild param in .fsproj file.
        |> Array.filter (fun x -> x.EndsWith "Nfdi4Plants.Fornax.Template.fsproj" |> not)
    projects
    |> Array.iter (DotNet.build id)
}