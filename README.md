# ProjectTitle: CrytoGraphs

<img src='public/images/cryptodash.PNG' width='350px'>

## Description

Fun-little application where users can search and pick their favourite cryptocurrencies. They can then view the changes over 24 hours to its value and see historical data visualized on a line graph. Using cryptocompare API (data might be slow to retrieve on first opening, if it takes too long).

## Table of Contents (structure)

|->node_modules
|->public
| |->index.html
|->src
| |->App.css, App.js, App.test.js
| |->index.css, index.js
| |->serviceWorker.js
|->.gitignore
|->package.json
|->README.md
|->yarn.lock

## Installation and Use

Need a code editor,node.js installed. Clone source file, then cd into the project. Next run command 'npm install' or 'yarn install'. Then run 'npm start' or 'yarn start'. The application will start in browser at 'http://localhost:3000/'.
Alternatively to view live site go to: https://cryptographs-currency.herokuapp.com/ . The site is slow to load, because a free heroku dyno is used and cryptocompare API is being used (free but slow).

## Build Status

This application as of now built. API is a bit slow.

### Code style

Javascript, CSS Grids

### Tech/Framework used

React, HighCharts, CryptoCompare API, Fuzzy Search, Lodash, LocalStorage, Google Fonts

### Features

Search, save favourite crytocurrency. View real-time market-value on graphs and compare with fan-favourite crytocurrencies. Also, using React context (sort of like redux passing state down using store).
