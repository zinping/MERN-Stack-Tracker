const router = require('express').Router();
let User = require('../models/user.model');

// get list of all users from MongoDB Atlas database using find() promise method
// return users in json format
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));

});

// add new user using post() to add content from html body field labelled 'username'
// save new user to database using save method then return json message
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router