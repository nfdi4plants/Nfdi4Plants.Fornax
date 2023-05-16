module Fornax.Nfdi4Plants.Tests

open Expecto

open Tests.MarkdigExtensions
open Tests.CustomParsing

[<Tests>]
let allTests = testList "Main" [
    Nfdi4PlantsSidebarHeader.tests
    Nfdi4PlantsHeader.tests
    Nfdi4PlantsCodeBlock.tests
    nfdi_sidebar_eleneo.main
]

let main argv =
    runTestsWithCLIArgs [] [||] allTests