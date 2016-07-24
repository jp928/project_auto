# React auto complete

React, Redux

## Install all dependencies

```javascript

npm install

```
## Javascript

Javascript entry file: `src/index.js`

**ES6 with babel**

 Webpack [babel loader](https://github.com/babel/babel-loader) is used in order to load my .js/.jsx files. ES6 with Babel allows you to use ES6 features like class, arrow functions

## SCSS

Base loader for SCSS: `app/styles/_base/app.scss`
Preprocess gulp's gulp-sass node package.  I have tried to separate the style files according to type. 

``` /_base = loading styles ``` <br>
``` /_layouts = containers/wrappers ``` <br>
``` /_modules = parts used everywhere ``` (variables) <br>
``` /_partials = small re-usable pieces of style ```  <br>

## Fonts

Currently this project is using font awesome for its icons.  This has been loaded from within the index.html file linking to its provided CDN.  [Font Awesome](//http://fontawesome.io/)


## Development

Builds the application and starts a webserver using webpack. By default the webserver starts at port 8080.


## Serve and Build

Run this script: <br />
$ npm start

## Dependancies

node: v4.4.5
npm: 3.10.2

## Requirements

* node
* npm
* gulp
* webpack
* react
* react-dom
* redux
* react-redux