---
layout: docs
title: Version control
published: 2022-05-09
Author: Dominik Brilhaus <https://orcid.org/0000-0001-9021-3197>
add toc: true
add sidebar: sidebars\mainSidebar.md
Article Status: draft
To-Dos:
  - write
---


<!-- 
# export all .md files in current dir to .docx via pandoc 
for f in *.md; do pandoc -s -o "${f%.md}.docx" "$f"; done
-->

<!-- # Version control

- [Scientific iteration and versioning](#scientific-iteration-and-versioning)
- [Git](#git)
- [Git platforms: GitHub and GitLab](#git-platforms-github-and-gitlab)
- [Git? - it's not for me!](#git---its-not-for-me)
- [How does DataPLANT support me to version control my data?](#how-does-dataplant-support-me-to-version-control-my-data)
  - [Register with DataPLANT](#register-with-dataplant)
  - [DataPLANT Support](#dataplant-support) -->

## Scientific iteration and versioning

Science is highly iterative. Most outcomes along the data life cycle (between an initial idea and the final publication, see also [RDM][KB-RDM]) are iterated through multiple cycles of design-test-repeat (e.g. laboratory experiments) or draft-review-publish (e.g. manuscripts) and mixes thereof. During these iterations multiple versions of the different outcomes are produced.  
There are different options to keep track of these versions. The seemingly simplest option is to duplicate a file and rename it by attaching a version, e.g. `manuscript.txt` &ndash; `manuscript_v2.txt` &ndash; `manuscript_final.txt`. Although this may work acceptably for individual use it quickly becomes confusing when sharing with other researchers. Cloud services offer options to keep track of changes (what was changed and by whom) within collaborative, multi-party projects (see also [Data Sharing][KB-DataSharing]). Here, versioning is usually taken care of automatically by the cloud service with little to no control by the user. However, these services are helpful only for version histories of typical office data (documents, presentations) or small datasets and within low-complexity projects.

## Git

A more sophisticated approach addressing the versioning needs in more complex projects originates from the field of software engineering. Software development builds on iterative design-test-repeat cycles, in which multiple versions of files (code, inputs and outputs) or directory structures emerge plus changing dependencies within (e.g. files) and outside (e.g. other softwares) of the project. So-called "distributed version control systems" (sometimes termed "source control" or "revision control") help software developers to keep track of project changes, guaranteeing stable integrity of the software, ideally before it is rolled-out to the public. The most prominent and vastly established distributed version control system is called **Git**.  
By taking chronological snapshots of a complete project (termed "git repository") rather than single files, Git allows the user to "go back in time" to an earlier version of that project, e.g. when the software was properly functioning. In contrast to the versioning of cloud services, active control over these snapshots lies in the user's hand, allowing to evolve a project with a well-documented version history paralleling the iterative steps.

## Git platforms: GitHub and GitLab

Although Git could be used locally as a standalone tool, its full power is unfolded via git platforms such as GitHub and GitLab. Similar to the typical cloud services for file sharing and collaboration, these platforms function as remote share-points for git repositories. They allow data access management (permission control) to share data privately with selected collaborators or the public. Individual contributions and changes by multiple collaborators can be tracked. On top of versioned data sharing, additional features, such as discussing and tracking project tasks and contributions, and wiki-based documentation render these git platforms very valuable for project and research (data) management. Consequently, they nowadays enjoy great popularity outside of software development.

Software developers collaborate via git to develop a software project over time, add new features, improve software parts or embed them into other software projects, and keep it up to date.
Likewise, git suits to track the evolution of a plant science project over time, iteratively developing more ideas, where analyses become more complex and build on top of each other or are embedded from other projects, more data is added as it becomes available from own experiments or external sources. This is particularly the case, if experimental data is packaged in one git repository together with descriptive metadata, computations, analyses, and their outcomes as well as licenses for reuse.

```missing
  - project snapshot as a whole
  - 
```

## Git? - it's not for me!

Yes, although we spare the technical details here, Git at first glance is complex and there is quite the learning curve for those who really urge to understand the inner workings. However, the complexity is also part of its strength to capture the parallel, multi-party, multi-facetted strings of scientifically iterative projects. And more importantly, there is a growing set of helper tools, GUI solutions and integrations into other tools to ease the work with git.

## How does DataPLANT support me to version control my data?

The following table gives an overview about DataPLANT tools and services related to sharing data. Follow the link in the first column for details.

Name | Type | Tasks on data sharing
----------------|-----------|------------------
**[ArcCommander]** | Tool | **Collect, structure and share:** <ul><li>Add bibliographical metadata to your ARC</li><li>ARC version control and sharing via DataPLANT's DataHUB</li><li>Automated metadata referencing and version control as your ARC grows</li></ul>
**[ARC][ARC]**  <br> (Annotated Research Context) | Standard | <ul><li>ARCs are git repositories</li><li>Package data with metadata in a defined format</li></ul>
**[DataHUB][DataHUB]** | Service | <ul><li>DataPLANT-customized GitLab instance</li><li>Infrastructure-as-code: on-premise solution</li><li>Federated system to share ARCs</li><li>Manage who can view or access your ARC</li></ul>

### Register with DataPLANT

In order to use the [DataHUB][DataHUB] and other DataPLANT infrastructure and services, please [sign up][Registration] with DataPLANT.  

### DataPLANT Support

Besides these technical solutions, DataPLANT supports you with community-engaged data stewardship. For further assistance, feel free to reach out via our [helpdesk](https://support.nfdi4plants.org) or by contacting us <a href="mailto:dataplant@uni-kl.de?subject=DataPLANT%20Version%20Control">directly</a>.

<div style="page-break-after: always;"></div>


<!-- Knowledgebase Cross-references -->

1. [KB-FAIR]: Link to knowledgebase article "FAIR principles"
1. [KB-Metadata]: link to article metadata
1. [KB-RDM]: link to article RDM
1. [KB-DataSharing]: link to article data sharing



<!-- 
- good for
  - typical office data, documents, presentations, small datasets
  - low-complexity projects
- not so good for
  - big data
  - code 



- well-documented version history of the complete project
  - Take chronological snapshots of your (code) work
  - allows you to go "back in time" to a snapshot
    - not just based on a single file

  - -->

<!-- 
- becomes increasingly famous for project and research (data) management
  - project management cycle: plan-do-check-(re)act  
  - track changes
  - track and assign tasks (issues)
  - track contributions (issues, commits, discussions)
  - collect meeting minutes -->

<!-- i.e. local git repositories are synchronized to a remote server and  -->


<!-- - group of developers come together



<!-- 
- add feature here, improve a part of the software there
- embed a piece of code into another software -->

<!-- - analogously: plant science projects grow,
  - 
  - more data 
  - parallel, multi-facetted strings where over time data, analyses and their results are contributed from various sources and by various people
-->

<!-- 

- I'm not a coder
- I don't have big data
- and this sounds all too complicated

- yes, it is.
- git's little helpers
  - GUI solutions and integrations into other tools that ease working with git 

 -->
  
