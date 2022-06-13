module Fornax.Nfdi4Plants.Tests

open Expecto

open Tests.MarkdigExtensions

let allTests = testList "" [
    Nfdi4PlantsSidebarHeader.tests
    Nfdi4PlantsHeader.tests
]

[<EntryPoint>]
let main argv =
    runTestsWithCLIArgs [] [||] allTests
