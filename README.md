# TiddlyGit [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](LICENSE)

| macOS                                                                                                                                                                       | Linux                                                                                                                                                                       | Windows                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![GitHub Actions macOS Build Status](https://github.com/tiddly-gittly/TiddlyGit-Desktop/workflows/macOS/badge.svg)](https://github.com/tiddly-gittly/TiddlyGit-Desktop/actions?query=workflow%3AmacOS) | [![GitHub Actions Linux Build Status](https://github.com/tiddly-gittly/TiddlyGit-Desktop/workflows/Linux/badge.svg)](https://github.com/tiddly-gittly/TiddlyGit-Desktop/actions?query=workflow%3ALinux) | [![GitHub Actions Windows Build Status](https://github.com/tiddly-gittly/TiddlyGit-Desktop/workflows/Windows/badge.svg)](https://github.com/tiddly-gittly/TiddlyGit-Desktop/actions?query=workflow%3AWindows) |

**TiddlyGit** - Customizable personal knowledge-base with Github as unlimited storage and blogging platform.

[![GitHub Releases](https://img.shields.io/github/downloads/tiddly-gittly/TiddlyGit-Desktop/latest/total?label=Download%20Latest%20Release&style=for-the-badge)](https://github.com/tiddly-gittly/TiddlyGit-Desktop/releases/latest)

## About TiddlyGit-Desktop

TiddlyGit is a cross-platform desktop app that make [nodejs-TiddlyWiki](https://github.com/Jermolene/TiddlyWiki5#installing-tiddlywiki-on-nodejs) easy to access.

### Why Github?

Because Github is one of the best free civil [BaaS](https://www.alibabacloud.com/blog/backend-as-a-service-baas-for-efficient-software-development_519851):

1. Its storage is basically free, allow us to store unlimited images and pdf files, which can have permanent URIs for public download
1. It has GraphQL API that allow us programmatically update our wiki
1. It has free [CI](https://github.com/features/actions) to automatically deploy our TiddlyWiki blog
1. It provides unlimited repository, public and private, which enables us to store private content into our TiddlyWiki

### Why not [TiddlyDesktop](https://github.com/Jermolene/TiddlyDesktop)?

Main reasons:

1. NodeJS version of TiddlyWiki have seamless auto-save experience, which is taking the advantage of SyncAdaptor instead of Syncer
1. We can have separated tiddler files, which can be modified by hand, or by other programs (e.g. VSCode with [VSCode-TW5-Syntax](https://github.com/joshuafontany/VSCode-TW5-Syntax))
1. Though TiddlyDesktop can load wiki folder generated by nodejs-TiddlyWiki, it can't backup that folder to the Github easily
1. With the electron as a shell, I can use `fs`, `git` and many other nodejs things within TiddlyWiki, which greatly extend the hackability.

### Download

Just download it from Github Release [Free Download](https://github.com/tiddly-gittly/TiddlyGit-Desktop/releases/latest)

You can also find changelog in the Release.

## Development

Development plan of TiddlyGit-Desktop is listed in these [Kanban](https://github.com/tiddly-gittly/TiddlyGit-Desktop/projects).

Explanation of our code can be found in the [Wiki](https://github.com/tiddly-gittly/TiddlyGit-Desktop/wiki).

<details>
<summary>To contribute, fork this repo, then clone it and setup development environment</summary>
 
```shell
# First, clone the project:
git clone https://github.com/YOUR_ACCOUNT/TiddlyGit-Desktop.git
cd TiddlyGit-Desktop
# And initialize the submodule of TW-Bob
# See https://git-scm.com/book/en/v2/Git-Tools-Submodules for meaning of following command
git submodule update --init --recursive
# Or maybe you are just using Github Desktop
# or GitKraken to clone this repo,
# and open it in your favorite code editor and terminal app

# install the dependencies

npm i

# Run development mode

npm run electron-dev

# Build for production

npm run dist

```

</details>

## Credits

The desktop app shell is based on [https://github.com/atomery/singlebox](atomery/singlebox) and [atomery/webcatalog](https://github.com/atomery/webcatalog), they provide lots of utils around website-generated-app, much powerful than generating app from website simply using Chrome. Also the independent developer @quanglam2807 behind these great tools helps me a lot when I develop TiddlyGit.

Current Icon is download from [iconsdb](https://www.iconsdb.com/custom-color/github-11-icon.html) under Creative Commons Attribution-NoDerivs 3.0 , if you are a designer, please feel free to contribute your ICON if you have a better idea.
