module FornaxTasks

open BlackFox.Fake
open Helpers
open Fake.Core

let watchFornax = BuildTask.create "fornax" [] {
    // Sadly this did not work out. Was not possible to reference build .dll on hot reload. Maybe in the future
    // runDotNet "dotnet build" "src/Nfdi4Plants.Fornax"
    runDotNet "fornax watch" "client"
}
