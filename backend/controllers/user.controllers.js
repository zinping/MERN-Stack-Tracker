let User = require('../models/user.model'); // return json LIST of all exercises from database using find() promise method

// return json LIST of all users from MongoDB Atlas database using find() promise method
exports.list_users = async (req, res) => {
	try {
		User.find()
			.then((users) => res.json(users))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// ADD new user using post() & save() to add content from html body field labelled 'username'
exports.add_user = async (req, res) => {
	try {
		const username = req.body.username;
		const newUser = new User({ username });

		newUser
			.save()
			.then(() => res.json('User added!'))
			.catch((err) => res.status(400).json('Error: ' + err));
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
