# MERN Full Stack Tracker

* Mongo Express React Node (MERN) full-stack app, integrates React frontend with Node.js backend. Tutorial code (see 'Inspiration' below but with customisations - particularly the mongoose connection script is more detailed and react frontend table has proper Bootstrap buttons to avoid error messages with edit & delete links.

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

### Backend
* MongoDB Atlas used as the backend database - requires mongodb to be running (or use Mongoose and heroku mLab to access)
* Postman used to test the backend, although the tutorial uses [Insomnia, a similar REST API](https://insomnia.rest/)
* Note: I used 'my ip address' as the whitelist network access in MongoDB.Atlas but this required daily updating when my ip address changed - otherwise with a non-matching ip address the backend simply did not work. Better to use the localhost address to avoid this problem but may be less secure

### Frontend
* React frontend includes a very simple Bootstrap navbar with just 3 links: home (the complete list of users/exercises), Add Exercise & Add User 
* Main content is a React table with 5 columns - see screenshots for details

## Screenshots

### Backend
![Backend screenshot](./img/mongodb.png)
![Backend screenshot](./img/postman.png)

### Frontend
![Frontend screenshot](./img/list.png)
![Frontend screenshot](./img/add-user.png)
![Frontend screenshot](./img/add-exercise.png)

## Technologies

### Backend
* [MongoDB Community Server v4.0.9](https://www.mongodb.com/download-center/community)
* [Mongoose v5.9.5](https://mongoosejs.com/) object modelling for Node.js
* [npm mongodb v3.5.4](https://www.npmjs.com/package/mongodb) official MongoDB driver for Node.js
* [Express.js middleware v4.17.1](https://expressjs.com/)
* [Node.js v12.4.0](https://nodejs.org/es/)
* [Nodemon](https://www.npmjs.com/package/nodemon) npm module so backend server will automatically restart afdter code changes

### Frontend
* [React framework v16.13.0](https://reactjs.org/)
* [Bootstrap v4.4.1](https://getbootstrap.com/) component library
* [React datepicker v2.14.0](https://www.npmjs.com/package/react-datepicker)
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

### Backend
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

### Frontend
* Extract from `exercise-list.js` - using lifecycle method `componentDidMount()` to get list of exercises from backend database using Axios http client, after component output has been redered to the DOM

```javascript
  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
```

## Features

### Backend
* All data stored in collections in a mongoDB.Atlas database that costs nothing to use in the free tier option. Data can be edited from the mongoDB.Atlas collection or from within the React frontend

### Frontend
* Uses the [React componentDidMount() method](https://reactjs.org/docs/state-and-lifecycle.html) 

## Status & To-Do List

* Status: Working full-stack app
* To-Do: Add commenting. Add functionality. Add resizing to make it more responsive

## Inspiration

* [The Best React JS by Beau Carnes: Learn the MERN Stack Full Tutorial MongoDB, Express, React, Node js](https://www.youtube.com/watch?v=FBeete8azkY)
* [React documentation](https://reactjs.org/docs/getting-started.html)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
