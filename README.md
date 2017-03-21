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

## Installation

* `git clone <repository-url>` this repository
* `cd fieldwork-manager`
* `npm install`

## Running / Development

* `node manager.js` or `firebase serve`
* Visit your app at [http://localhost:5000](http://localhost:5000).
* Live version is on [Heroku](http://fieldwork-manager.heroku.com/).

## USAGE

http://<[URL] or [localhost:5000 if running locally]>

  /clear - clears all database entries.

  /seed?jobs=[#] - generates [#] jobs in the attached firebase database.

  /seed?workers=[#] - generates [#] workers in the attached firebase database.

  *Query parts can be combined.
