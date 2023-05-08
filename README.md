# Nfdi4Plants.Fornax

This fornax template implements the existing [nfdi-web-components](https://github.com/nfdi4plants/web-components) for **documentation**.

![Nfdi4Plants.Fornax.Template NuGet downloads](https://img.shields.io/nuget/dt/Nfdi4Plants.Fornax.Template?label=Nfdi4Plants.Fornax.Template%20downloads&style=flat-square)
![Nfdi4Plants.Fornax NuGet downloads](https://img.shields.io/nuget/dt/Nfdi4Plants.Fornax?label=Nfdi4Plants.Fornax%20downloads&style=flat-square)

## install & usage

See the official [@nfdi4plants/web-components docs](https://nfdi4plants.github.io/web-components-docs/docs/SupportedStaticSiteGenerators#Fornax.html) for fornax support.

# dev

1. Download repo.
2. Run `dotnet tool restore` in root directory.

## contribute to library

1. Make changes to library and add unit tests.
2. Run `.\build.cmd releasenotes semver:xxx`, where `xxx` can be minor, major or patch. (This will also update the version in `package.json` inside the template project.)
3. Run `.\build.cmd release`. This will:
    - Run tests
    - Build the library
    - Create a nuget packages for both the library and the template and copy the library-.nupkg to the client test folder.
4. Update nuget reference for library to new version.
    - In `client\loaders\_lib.fsx`.
    - 👀 It might be necessary to clear nuget cache if the version was not changed for it to update.
5. [Test](##start-test-client) the new version.
    - if working correctly upload the new version to nuget
6. Verify template is working correctly:
    - Only if library was updated:
        - Wait until fully published by nuget then update Nfdi4Plants.Fornax in src/Nfdi4Plants.Fornax.Template/content with     
        `dotnet paket update Nfdi4Plants.Fornax`
        - rebuild with package with `.\build.cmd release`
    - `dotnet new --uninstall Nfdi4Plants.Fornax.Template`
    - `dotnet new --install pkg\Nfdi4Plants.Fornax.Template.X.X.X.nupkg`, adjust semver accordingly.
    - Create a new folder somewhere and do `dotnet new NFDIdocs` inside. Then follow the freshly created README.md.

## update web-components

Check out the installation docs on [nfdi4plants/web-components](https://github.com/nfdi4plants/web-components#installation). For fornax you will need to bundle the web-components with rollup. See the respective section for more information.

## start test client

1. Run `.\build.cmd fornax` in root folder.
2. Open page [http://127.0.0.1:8080](http://127.0.0.1:8080) in browser.
