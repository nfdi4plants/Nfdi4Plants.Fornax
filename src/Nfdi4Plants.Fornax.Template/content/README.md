# Nfdi4Plants.Fornax.Template

After initializing this template please replace two placeholder variables:

1. `src/generators/layout.fsx`, replace `"placeholder"` in `let baseUrl = "placeholder"` with the correct base url. See example above.
2. `src/loaders/docsloader.fsx`, replace `"placeholder"` in `let productionBasePath = "placeholder"` with the repository name if for example hosted on GitHub pages.

Then run the following commands to get started: 

1. `dotnet tool restore`, will restore local dotnet tools _fornax_ and _paket_.
2. `dotnet paket install`, will download the Nfdi4Plants.Fornax library.
3. `npm run fornax`

Done! 🎉 You can now open your static website on http://127.0.0.1:8080

## Docs 

Check out the docs for usage [here](https://nfdi4plants.github.io/web-components-docs/docs/SupportedStaticSiteGenerators.html#fornax).

## Update @nfdi4plants/web-components 

_Might need to install rollup globally before._

1. `npm install @nfdi4plants/web-components@latest`
2. `npm run bundle`

## Update Nfdi4Plants.Fornax

`dotnet paket update Nfdi4Plants.Fornax`

## Update Searchbar

We use [Pagefinder](https://pagefind.app/docs/) as basis for static website search.
It generates the `src/_public/_pagefind` folder, containing css and js to power the searchbar.

If the searchbar is not visible (should be above sidebar) you need to rerun pagefind.

**Run**: `npm run index` 

This will create the necessary files. But *at the moment* will not correctly work when [Using the testclient](##start-test-client). 
It will show the ui part but will not function.

To test the searchfunction you can use: `npm run indexserve`.

## Schedule automatic updates for gh-pages

See [here](https://nfdi4plants.github.io/web-components-docs/docs/ScheduledUpdates.html).