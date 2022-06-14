---
layout: docs
title: Data sharing
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

# Data sharing

## The merits of data sharing

Research is a collaborative endeavor that builds on the interaction and efficient knowledge exchange between different researchers. We share research data to get input from peers and elaborate, initiate or expand putative or existing collaborations. Data sharing allows us to save time and resources, e.g., by planning or performing investigations together, sharing common pipelines for data analysis or prevent redundant or overlapping investigations, simply by knowing what other peers might already investigate. Sharing research data is thus the key to every successful research project.

However, sharing data is oftentimes hindered even between researchers of close surroundings. There may be legal reasons, including unclear policies from funding agencies or institutions: *"Who am I allowed to share my data with?", "How do I handle data requiring specific precautions for data security or intellectual property rights?"*. Social or emotional reasons might occur, if researchers might not know about peers interested in their own data: *"How do I know, who would like to see my data, if they do not know it exists?"* or are afraid to "lose" their data: *"Once I share my data, someone else will publish and get credit for it"*. It is a common misconception of the [FAIR][KB-FAIR] principles of data stewardship that accessible data equals public and openly accessible data.

Most researchers however want to share their data and are very aware what data to share with whom, but face technical or even financial issues: *"Where and how can I securely share and integrate research data of multiple types, originating from multiple sources?".* The sheer amounts of data and data types produced during complex multi-party investigations can easily become overwhelming to handle, costly to store, or limited by storage capacities, especially when proper data protection mechanisms are employed.

## The one-stop-shop does not exist

Today many options for sharing and collaborating on data are available and oftentimes consciously or incidentally integrated into daily research routines. These include prominent open source or commercial cloud platforms like nextcloud, google drive, dropbox, onedrive and many more. While these are great for synchronous collaboration on typical office data, text files, presentations or simple calculations, they offer limited capacities for data analyses, especially those required for large-scale or complex scientific data. Other solutions specifically designed to accommodate scientific data include [electronic lab notebooks][KB-ELNs] to document daily lab routines or platforms like [galaxy][galaxy] and [omero] to analyze and share data from omics or imaging experiments, respectively.

To varying extents, these platforms offer a mix of options for local and remote, asynchronous and synchronous collaboration, often supported by automated version-control to track file version history. Different modes and control of access to the data and different solutions for storage sites (on-premise or some random server in the US..) exist to suit various aspects of data security and property rights.

For research individuals or groups the data sharing dilemma oftentimes lies in the fragmentation of data shares (shared data). The more projects collaborating on data of different domains, types or formats and the more people and groups involved, the more platforms are being used, resulting in a fragmented and barely accessible or efficiently manageable data landscape. As a consequence, (un)published data is still mostly shared through conventional routes, such as direct communication between peers via email, instant messaging, virtual and live, personal or group, meetings or presented in more formal contexts such as reports and symposia. As these formats frequently focus on late-stage or final research outputs only, they diminish the chances for collaborations early in an investigation.

## Changing the dogma from tool-bound to data-centric: Good data sharing

Trying to find the tool or platform most suitable for the project or data to be shared always depends on the context and is innately erroneous, leading to increased fragmentation. Now, how can the data fragmentation be resolved without siloing everything in one place, i.e. yet another platform? In order to set loose from platform dependency, one could flip the data sharing habits inside-out and switch from the tool perspective towards a data-centric perspective. Instead of trying to enforce the use of a specific platform for data sharing, one could use a data format suitable to and migratable between a wide range of tools and purposes.

In order to support [FAIR][KB-FAIR] data sharing, such a data format requires high flexibility to be adoptable to many data types and sources, long-term persistency through independence of (i.e. extension or conversion to) specific data formats and scalability to increasing data amounts. Federated data storage and access allows secure, trusted data sharing with involved parties from different locations across institute borders. Data protection is further granted through geo-redundant backup mechanisms. In combination with a version-control system to follow file change history, the federated authentication and authorization system allows to control data access and contribution for proper crediting and provenance tracking. Data sharing is enabled throughout project lifetime &ndash; from idea to unpublished data to publication &ndash;, by structuring the data in a defined format packaged with descriptive metadata and licenses to provide technically and legally clear terms of data re-use. From there, [data publication][KB-DataPublication] comes with as little effort as assigning a persistent identifier without any need to adapt the data once the associated manuscript is published.

## How does DataPLANT support me in data sharing?

The following table gives an overview about DataPLANT tools and services related to sharing data. Follow the link in the first column for details.

Name | Type | Tasks on data sharing
----------------|-----------|------------------
**[ARC][ARC]**  <br> (Annotated Research Context) | Standard | **Structure:** <ul><li>Package data with metadata in a defined format</li></ul>
**[DataHUB][DataHUB]** | Service | **Share:** <ul><li>Infrastructure-as-code: on-premise solution</li><li>Federated system to share ARCs</li><li>Manage who can view or access your ARC</li></ul>

### Register with DataPLANT

In order to use the [DataHUB][DataHUB] and other DataPLANT infrastructure and services, please [sign up][Registration] with DataPLANT.  

### DataPLANT Support

Besides these technical solutions, DataPLANT supports you with community-engaged data stewardship. For further assistance, feel free to reach out via our [helpdesk](https://support.nfdi4plants.org) or by contacting us <a href="mailto:dataplant@uni-kl.de?subject=DataPLANT%20Data%20Sharing">directly</a>.

<div style="page-break-after: always;"></div>

<!-- Knowledgebase Cross-references -->

1. [KB-FAIR]: Link to knowledgebase article "FAIR principles"
1. [KB-Repositories]: link to article repositories
1. [KB-Metadata]: link to article metadata
1. [KB-Git]: link to article metadata
1. [KB-ELNs]: link to article Electronic lab notebooks
1. [KB-DataPublication]: link to article data publication

<!-- Reference links -->
[DataHUB]: <https://git.nfdi4plants.org> "ARC DataHUB"
[ARC]: <https://github.com/nfdi4plants/ARC> "ARC specifications"
[Registration]: <https://register.nfdi4plants.org/registration> "DataPLANT Registration"
[omero]: <https://www.openmicroscopy.org/omero/> "Omero"
[galaxy]: <https://usegalaxy.eu> "Galaxy"

<!-- 

This article is about sharing research data. 
While sharing data in a [FAIR][KB-FAIR] manner *can* mean publication of data, maybe even in an open access journal or database granting free access to the wide public

> Data sharing ≠ Open Access
> Data sharing ≠ Publication 
-->

<!-- 
## Hurdles

(for legal or technical even social, emotional reasons)

- social
  - Share with whom?
  - Who's interested in my data? 
  - How do I know, who would like to see my data, if they do not know it exists? 
- legal
  - unclear policies, e.g. funders
  - data security
  - intellectual property
- technical
  - how to integrate multi-type and multi-scale data originating from multiple-sources
  - the sheer amounts of data and different data-types required for complex multi-party investigations
  - data protection, back-up mechanisms
- financial 
  - data storage can be expansive -->

<!-- ## The needs: for sharing

- sharing unpublished data
  - packaged with metadata
  - without need to adapt once manuscript is published, data DOIed
- sharing with involved parties from different locations (e.g. in EU-funded projects), or even just between two e.g. German universities
- keep track of changes (by all parties)
- secure, trusted sharing
- receive credit

## Current "solutions", clouds, collaborative platforms

One-stop-shop? 

We are all aware of commercial platforms and cloud services such as
google drive, dropbox, onedrive, icloud, nextcloud, ...

- great for synchronous collaboration
- great for text and presentations
- limited capacities for data analyses, especially large-scale or complex scientific data
- allow local and remote collaboration, synchronous and asynchronous

- local / on-premise
  - pro: secure, more trusted, proximity
  - con: limited accessibility
- global / off-premise
  - pro: widely accessible, adoptable
  - con:



- FAIR
- ***flexible*** system, adoptable to many data types and sources, 

- Structured sharing unpublished data
  - packaged with descriptive metadata
  - without need to adapt once manuscript is published, data DOIed

- 
- controlled access, across institute borders, storage site
- sharing with involved parties from different locations (e.g. in EU-funded projects), or even just between two e.g. German universities
# protection 
- federated, controlled access, geo-redundant data protection and back-up mechanisms. 
- keep track of changes (by all parties)

# legal
- clear system for credit and provenance



 -->
