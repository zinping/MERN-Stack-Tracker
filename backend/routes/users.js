const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controllers');

router.get('/', user_controller.list_users);
router.post('/add', user_controller.add_user);

module.exports = router;
