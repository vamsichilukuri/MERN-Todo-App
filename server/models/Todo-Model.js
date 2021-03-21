const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const Todo = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		text: {
			type: String,
		},
		status: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);
