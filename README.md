# Node.js Template

A barebones Node.js app using [Express](http://expressjs.com/).

This application also supports direct deployment to Heroku.

## Quick Start

Make sure you have [Node.js](http://nodejs.org/) installed.

Optionally, to run on Heroku you'll need the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone https://github.com/herman-rogers/node-backend-template.git # or clone your own fork
$ cd node-backend-template
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Heroku Deploy

```
$ heroku create
$ git push heroku master
$ heroku open
```