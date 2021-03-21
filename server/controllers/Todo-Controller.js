const Todo = require("../models/Todo-Model");
const ObjectId = require("mongodb").ObjectID;

const GetTodos = async (req, res) => {
	try {
		const todos = await Todo.find({});
		res.status(200).json(todos);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const GetTodo = async (req, res) => {
	try {
		const todo = await Todo.findOne({ _id: new ObjectId(req.params.id) });
		res.status(200).json(todo);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const CreateTodo = async (req, res) => {
	try {
		const { title, text } = req.body.newTodo;
		const todo = await Todo.create({ title, text });
		res.status(200).json({ todo });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const EditTodo = async (req, res) => {
	try {
		const { title, text } = req.body.updateTodo;
		const todo = await Todo.findOneAndUpdate(
			{ _id: new ObjectId(req.params.id) },
			{ title, text }
		);
		res.status(200).json({ todo });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const UpdateStatus = async (req, res) => {
	try {
		const { status } = req.body;
		console.log(status)
		console.log(req.params.id)
		const todoStatus = await Todo.findOneAndUpdate(
			{ _id: new ObjectId(req.params.id) },
			{ $set: { status: status } }
		);
		res.status(200).json({ todoStatus });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const DeleteTodo = async (req, res) => {
	try {
		await Todo.findOneAndDelete({ _id: new ObjectId(req.params.id) });
		res.status(200).json({ message: "Todo deleted successfully" });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = {
	GetTodo,
	GetTodos,
	EditTodo,
	CreateTodo,
	DeleteTodo,
	UpdateStatus,
};
