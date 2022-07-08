# Nfdi4Plants.Fornax

This fornax template implements the existing [nfdi-web-components](https://github.com/nfdi4plants/web-components) for **documentation**.

## install & usage

See the official [@nfdi4plants/web-components docs](https://nfdi4plants.github.io/web-components-docs/docs/SupportedStaticSiteGenerators#Fornax.html) for fornax support.

# dev

1. Download repo.
2. Run `dotnet tool restore` in root directory.

## contribute to library

- Library is located in `src`.
- Tests can be found in `tests`.

1. Make changes to library and add unit tests.
2. Run `.\build.cmd releasenotes semver:xxx`, where `xxx` can be minor, major or patch. 
3. Run `.\build.cmd release`. This will:
    - Run tests
    - Build the library
    - Create a nuget package and copy it to the client test folder.
4. Update nuget reference for library to new version.
    - In `client\loaders\docsloader.fsx`.
    - 👀 It might be necessary to clear nuget cache if the version was not changed for it to update.
5. [Test](##start-test-client) the new version.    

## update web-components

Check out the installation docs on [nfdi4plants/web-components](https://github.com/nfdi4plants/web-components#installation). For fornax you will need to bundle the web-components with rollup. See the respective section for more information.

## start test client

1. Run `.\build.cmd fornax` in root folder.
2. Open page [http://127.0.0.1:8080](http://127.0.0.1:8080) in browser.
