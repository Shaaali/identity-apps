# asgardeo-docs

This repository contains the documentation website for Asgardeo.

We are using [Vuepress](https://vuepress.vuejs.org/) framework to convert documentation written in markdown (.md) format
to a static single page website.

## Setting up

**Prerequisites**

- [Node.js 10+](https://nodejs.org/en/)

Before you get started, make sure you have the right versions installed by running the following commands on a terminal
window.

```
node --version
```

## Git clone the repo

1. Click **Fork** on the top-right corner and fork this repository.
2. Git clone the forked repository to your machine.

## Install dependencies

1. Navigate inside the root of `asgardeo-docs`.

  ```
  cd asgardeo-docs/
  ```

2. Install dependencies using npm.

  ```
  npm ci
  ```

## Run the Asgardeo documentation site locally

1. Run the following command to start up the docs site locally.

  ```
  npm run dev
  ```

2. Open http://localhost:8080/asgardeo-docs on a new browser window to view the site.

> Note: The server supports hot deploy so any changes you make to markdown content will automatically apply on your browser within a few seconds. Note that any changes to the page frontmatter or site configuration require you restart the server.

To stop running the server, press `CTRL+C` on the keyboard.

## Build the Asgardeo documentation site locally

1. Run the following command to start up the docs site locally.

  ```
  npm run build
  ```

2. The built website files can be found in `docs/.vuepress/dist` directory.
