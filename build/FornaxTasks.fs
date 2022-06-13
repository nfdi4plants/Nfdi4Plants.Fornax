module FornaxTasks

open BlackFox.Fake
open Helpers

let watchFornax = BuildTask.create "fornax" [] {
    runDotNet "dotnet build" "src/Fornax.Nfdi4Plants"
    runDotNet "fornax watch" "src"
}
