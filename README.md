# Nfdi4Plants.Fornax

This fornax template implements the existing [nfdi-web-components](https://github.com/nfdi4plants/web-components) for **documentation**.

## install

You can find the loader and generator functions on nuget: 

Best use this repo as implemented in [web-components-docs](https://github.com/nfdi4plants/web-components)

## usage

This template is built around nfdi-web-components and will fit all markdown based information into this "framework".

### docs

To add more documentation, add a markdown file to `\src\docs`. The file MUST start with a metadata block:

<!--used yml here as code language for nice color syntax-->
```yml
---
layout: docs
title: Metadata
published: 2022-05-09
Author: Dominik Brilhaus <https://orcid.org/0000-0001-9021-3197>
add toc: true
add sidebar: sidebars\mainSidebar.md
Article Status: Publishable
To-Dos: 
    - Update links to other KB articles
---
```

- All keys (`layout`, `author`, etc.) are **not** case sensitive.
- All fields can be at ANY position.
- MUST start and end with `---` .
- MUST contain `layout: docs`.
    - This triggers fornax parsing to html.
- MUST contain `title: xxxx`.
    - Will be added as "# xxxx" to the html.
    - Will be used to name the generated webpage.
- MUST contain `published: yyyy-MM-dd`.
- MAY contain `Author: xxxx`.
- MAY contain `add toc: true`.
    - Will add automated table of contents from all found headers in content.
- MAY contain `add sidebar: realtive\path\to\sidebar.md` to add the sidebar element to the page.
- MAY contain **any** other metadata. The information will be read but will not affect the generated html.

### sidebar

Sidebar files MAY be in ANY **subdirectory** of `\src\docs`. Sidebar markdown files must start with a metadata block:

```yml
---
published: 2022-05-09
Article Status: Publishable
To-Dos: 
    - Update links to other KB articles
---
```

- MAY contain **any** other metadata. The information will be read but will not affect the generated html.

To add a sidebar element to the page, use the codeblock syntax:

<pre><code>```Data Management Plan
# Data Management Plan:/docs/DataManagementPlan.html
## Advantages of a DMP:/docs/DataManagementPlan.html#advantages-of-a-dmp
### Elements of a DMP?:/docs/DataManagementPlan.html#elements-of-a-dmp
# DataPLANT's Data Management Plan Generator:/docs/DataManagementPlan.html#dataplants-data-management-plan-generator
```</code></pre>

- All text after the opening "```" will be parsed to the element title.
- Inner text MUST only contain heading lines.
    - Only headers up to `###` are parsed. All header with more depth are parsed to `###`.

## update web-components

Check out the installation docs on [nfdi4plants/web-components](https://github.com/nfdi4plants/web-components#installation). For fornax you will need to bundle the web-components with rollup. See the respective section for more information.

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

## start test client

3. Run `.\build.cmd fornax` in root folder.
4. Open page [http://127.0.0.1:8080](http://127.0.0.1:8080) in browser.
