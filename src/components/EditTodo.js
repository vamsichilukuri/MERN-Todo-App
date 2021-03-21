import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//API
import axios from "axios";

toast.configure();
function EditTodo({ match }) {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && text) {
			const updateTodo = { title, text };
			axios
				.put(`http://localhost:3001/todos/${match.params.id}`, {
					updateTodo,
				})
				.then(() => {
					setTitle("");
					setText("");
					toast.success("Updated");
					history.push("/");
				})
				.catch((err) => console.log(err.message));
			// history.push("/");
			// console.log(updateTodo);
		} else {
			console.log("something is missing");
		}
	};
	useEffect(() => {
		axios
			.get(`http://localhost:3001/todos/${match.params.id}`)
			.then((response) => {
				console.log("hurryy => ", response);
				const todo = response.data;
				setTitle(todo.title);
				setText(todo.text);
			})
			.catch((error) => toast.error(error.message));
	}, []);
	return (
		<div className="container">
			<div className="mt-3 todo-form">
				<h3>Edit Todo</h3>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input
							className="form-control"
							type="text"
							name="title"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="text">Text</label>
						<input
							className="form-control"
							type="text"
							name="text"
							id="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-secondary" type="submit">
							Update Todo
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditTodo;
