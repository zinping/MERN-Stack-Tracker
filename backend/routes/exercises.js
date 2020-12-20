const express = require('express');
const router = express.Router();

const exercise_controller = require('../controllers/exercise.controllers');

router.get('/', exercise_controller.list_exercises);
router.post('/add', exercise_controller.add_exercise);
router.get('/:id', exercise_controller.find_exercise);
router.delete('/:id', exercise_controller.delete_exercise);
router.post('/update/:id', exercise_controller.update_exercise);

module.exports = router;
