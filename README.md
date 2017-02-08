# fieldwork-manager

NodeJs application to seed the Firebase database for PSTCC-2017 Capstone project
using HTTP/URIs.

This README outlines the details of collaborating on this Node.js application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Express](http://expressjs.com/)
* [firebase-admin](https://www.npmjs.com/package/firebase-admin/)
* [Faker](https://www.npmjs.com/package/Faker)
* [Moment](https://momentjs.com/)
* [faker](https://www.npmjs.com/package/Faker)
* [moment](https://momentjs.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd fieldwork-manager`
* `npm install`

## Running / Development

* `node manager.js`
* Visit your app at [http://localhost:8081](http://localhost:8081).
* Live version is at (http://fieldwork-manager.heroku.com/).

## QUERIES

http://<[URL] or [localhost:8081 if running locally]>

  /hello-world?num=[#] - generates [#] 'HelloWorld' messages.

  /seed?num=[#] - generates [#] entries in the attached firebase database.
