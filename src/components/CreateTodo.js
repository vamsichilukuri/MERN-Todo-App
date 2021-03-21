import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function CreateTodo() {
	
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title && text) {
			const newTodo = { title, text };
			axios
				.post("http://localhost:3001/todos", { newTodo })
				.then((res) => {
					toast.success("new todo added")
					history.push("/")
				})
				.catch((err) => {
					toast.error(err.message)
				});
			setTitle("");
			setText("");
		} else {
			toast.error('Somthing is missing')
		}
	};

	return (
		<div className="container">
			<div className="mt-3">
				<h3>Create Todo</h3>
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
						<button className="btn btn-primary" type="submit" >
							Create Todo
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateTodo;
