# launchpad-api

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![shields-io](https://img.shields.io/badge/Customization%20Options-Scuffed%20lol-yellowgreen)


## Project setup
Clone to disk using GitHub CLI:
```sh
gh repo clone AceiusIO/launchpad-api
```
OR Clone it from desktop, https://desktop.github.com

Then, install dependencies with
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
yarn build ; node apitest.js
```
I would do unit testing but Im an idiot, so IDK how lol.

### Compiles and minifies for production
haha webpack go brrrrr
```sh
yarn build
```
use for making PWAs and stuffs

### Lints and fixes files
This should be done automatically on build (or on save for core files), but if you need to do it manually, use:
```sh
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
