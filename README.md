# MERN Full Stack Tracker

Mongo Express React Node (MERN) full-stack app, integrates a React frontend with Node.js backend.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* requires mongodb to be running (or use Mongoose and heroku mLab to access).

## Screenshots

![Backend screenshot](./img/nodedb.png)
![Backend screenshot](./img/postman.png)

## Technologies

### Backend
* [MongoDB Community Server v4.0.9](https://www.mongodb.com/download-center/community)
* [Mongoose v5.9.5](https://mongoosejs.com/) object modelling for node.js
* [npm mongodb v3.5.4](https://www.npmjs.com/package/mongodb) official MongoDB driver for Node.js
* [Express.js middleware v4.17.1](https://expressjs.com/)
* [Node.js v12.4.0](https://nodejs.org/es/)
* [Nodemon](https://www.npmjs.com/package/nodemon) npm module so backend server will automatically restart afdter code changes

### Frontend
* [React framework v16.13.0](https://reactjs.org/)
* [Bootstrap v4.4.1](https://getbootstrap.com/) component library
* [React datepicker v2.14.0](https://www.npmjs.com/package/react-datepicker) date-picker
* [Axios](https://www.npmjs.com/package/axios) promise-based http client

## Setup

### Backend
* Change to `/backend` directory
* Install dependencies using `npm i`
* Install [nodemon](https://www.npmjs.com/package/nodemon) globally if you don't already have it
* Register with [MongoDB Atlas](www.mongodb.com), create & configure a database cluster and add cluster connection string to .env file
* Run `nodemon server` for a dev server
* Navigate to `http://localhost:5000/`. The server will automatically reload if you change any of the source files

### Frontend
* From top-level directory `mern-stack-tracker` run `npm start`. Frontend will open at `http://localhost:3000/`

## Code Examples

* Extract from `server.js` - connects to database using mongoose

```javascript
const uri = process.env.ATLAS_URI;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

mongoose
  .connect(uri, options)
  .catch(error => console.log(error));

const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
});
mongoose.connection.on('error', err => {
  logError('mongoose connection error', err);
});
```

## Features

* todo

## Status & To-Do List

* Status: connects to backend database. No frontend as yet
* To-Do: Complete backend then frontend for a working full stack

## Inspiration

* [The Best React JS by Beau Carnes: Learn the MERN Stack Full Tutorial MongoDB, Express, React, Node js](https://www.youtube.com/watch?v=FBeete8azkY)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
