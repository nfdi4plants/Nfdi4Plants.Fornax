module FornaxTasks

open BlackFox.Fake
open Helpers

let watchFornax = BuildTask.create "fornax" [] {
    runDotNet "dotnet build" "src/Nfdi4Plants.Fornax"
    runDotNet "fornax watch" "src"
}
