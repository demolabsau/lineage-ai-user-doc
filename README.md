# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```shell
npm
```

### Local Development

```shell
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
npm run build
```
```shell
npm run deploy
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```shell
USE_SSH=npm yarn deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> npm deploy
```
In Powershell
```powershell
$Env:GIT_USER = "camwang"

npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
