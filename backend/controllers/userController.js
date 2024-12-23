// controllers/userController.js
const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
};

// Update user
exports.updateUser = async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (!updatedUser) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json(updatedUser);
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
};

// Delete user
exports.deleteUser = async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		if (!deletedUser) {
			return res.status(404).json({ message: "User not found" });
		}
		res.json({ message: "User deleted" });
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
};
