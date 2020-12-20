let Exercise = require('../models/exercise.model');

// return json LIST of all exercises from database using find() promise method
exports.list_exercises = async (req, res) => {
	try {
		Exercise.find()
			.then((exercises) => res.json(exercises))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// ADD new exercise using post() & save() to add content from html body input fields
exports.add_exercise = async (req, res) => {
	try {
		const username = req.body.username;
		const description = req.body.description;
		const duration = Number(req.body.duration);
		const date = Date.parse(req.body.date);

		const newExercise = new Exercise({
			username,
			description,
			duration,
			date,
		});

		newExercise
			.save()
			.then(() => res.json('Exercise added!'))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// FIND exercise object from database by object id e.g. ObjectId("5e70a53c9d38b6134cd82a49")
exports.find_exercise = async (req, res) => {
	try {
		Exercise.findById(req.params.id)
			.then((exercise) => res.json(exercise))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// DELETE exercise from database using object id
exports.delete_exercise = async (req, res) => {
	try {
		Exercise.findByIdAndDelete(req.params.id)
			.then(() => res.json('Exercise deleted'))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// UPDATE exercise from database using object id
exports.update_exercise = async (req, res) => {
	try {
		Exercise.findById(req.params.id)
			.then((exercise) => {
				exercise.username = req.body.username;
				exercise.description = req.body.description;
				exercise.duration = req.body.duration;
				exercise.date = Date.parse(req.body.date);
				exercise
					.save()
					.then(() => res.json('Exercise Updated!'))
					.catch((err) => res.status(400).json('Error: ' + err));
			})
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
