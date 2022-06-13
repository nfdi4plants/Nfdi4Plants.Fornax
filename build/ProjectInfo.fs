module ProjectInfo

open Fake.Core
open Fake.Extensions.Release

Release.exists()

let project = "Nfdi4Plants.Fornax"

let testProjects = 
    [
        // add relative paths (from project root) to your testprojects here
        @"tests\Fornax.Nfdi4Plants.Tests\Fornax.Nfdi4Plants.Tests.fsproj"
    ]

let solutionFile  = $"{project}.sln"

let configuration = "Release"

let gitOwner = "Freymaurer"

let gitHome = $"https://github.com/{gitOwner}"

let projectRepo = $"https://github.com/{gitOwner}/{project}"

let pkgDir = "pkg"

let release = ReleaseNotes.load "RELEASE_NOTES.md"

let stableVersion = SemVer.parse release.NugetVersion

let stableVersionTag = (sprintf "%i.%i.%i" stableVersion.Major stableVersion.Minor stableVersion.Patch )

let mutable prereleaseSuffix = ""

let mutable prereleaseTag = ""

let mutable isPrerelease = false