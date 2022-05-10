# nfdi4plants-fornax-template

This fornax template implements the existing [nfdi-web-components](https://github.com/nfdi4plants/web-components) for **documentation**.

## install 

1. Download repo.
2. Run `dotnet tool restore` in root directory.
3. Run `dotnet fornax watch` in `\src` folder.
4. Open page in browser.

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