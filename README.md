# 🚀 launchpad-api

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)  
![shields-io](https://img.shields.io/badge/Customization%20Options-Scuffed%20lol-yellowgreen) ![shields-io](https://img.shields.io/badge/Development%20Progress-100%25-brightgreen)

launchpad-api is a GUI for sending http GET requests to a target, and can be used for things like launching pyrotechnical displays, model rockets, or other things in a *🎩 classy* way.

## 💾 Project setup
First, clone the project to disk with the GitHub CLI, GitHub Desktop, or however you get your git repos.  
In order to commit to the project or build the code, you will need the folowing installed:
 - [NodeJS](https://nodejs.dev)
 - [Yarn](https://yarnpkg.org) `npm install yarn -g`
 - [VueCLI](https://cli.vuejs.org) `npm install vue -g`

Then, install the rest of the dependencies with yarn.
```sh
yarn install
```

### Testing your changes
#### Option 1: Yarn + Webpack
Using yarn + webpack, we can easily test UI changes
```sh
yarn serve
```
#### Option 2: Node appserver
Because of [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), testing APIs has to be done on the same URL. Thanks to a node appserver, we can do such with
```sh
yarn build ; node server.js
```
I would do unit testing but Im an idiot, so IDK how lol.

### Compiles and minifies for production
If you want to build from source to deploy on your server, do so with this command.
```sh
yarn build
```
haha webpack go brrrrr

### Lints and fixes files
This should be done automatically on build (or on save for core files), but if you need to do it manually, use:
```sh
yarn lint
```

## ⚙️ Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
Changing the test password can be done from the password constant, in `src/server.js`. This server is a TEST server only, and while you *can*, you should probabally use somthing else, for example nginx or just make your own.

## 📜 Licencing
launchpad-api is licenced under the GNU GPL v3, and as such, comes with no warranty, so if you do somthing stupid, I'm not responsible. :|
