const {
	GetTodos,
	GetTodo,
	EditTodo,
	CreateTodo,
	DeleteTodo,
	UpdateStatus,
} = require("../controllers/Todo-Controller");

module.exports = (app) => {
	app.get("/todos", GetTodos);
	app.get("/todos/:id", GetTodo);
	app.post("/todos", CreateTodo);
	app.put("/todos/:id", EditTodo);
	app.put("/todos/status/:id", UpdateStatus);
	app.delete("/todos/:id", DeleteTodo);
};
