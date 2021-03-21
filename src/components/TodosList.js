import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function TodosList() {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/todos")
			.then((response) => {
				setTodoList(response.data);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	});

	// change todo status is completed or not
	function handleTodoStatus(todo){
		if (!todo.status) {
			const status = true
			axios.put(`http://localhost:3001/todos/status/${todo._id}`,{status})
			.then(res=>{
				toast.info("Todo completed")
			})
			.catch(error=>toast.error(error.message))
		}else{
			const status = false
			axios.put(`http://localhost:3001/todos/status/${todo._id}`,{status})
			.then(res=>{
				toast.warning(`⚠ Todo not-complted`)
			})
			.catch(error=>toast.error(error.message ))

		}
	}

	// delete todo
	function deleteTodo(todo){
		axios.delete(`http://localhost:3001/todos/${todo._id}`)
			.then(res=>{
				toast.warning("⚠ Todo deleted")
			})
			.catch(error=>toast.error(error.message))
	}

	return (
		<div className="container">
			<div className="mt-3">
				<h2>Todo's List</h2>
				<hr />
				{
					todoList.length == 0  ? <h2 className="text-warning"> No todo's available</h2> :
				<table className="table table-striped mt-3">
					<thead>
						<tr>
							<th>Title</th>
							<th>Text</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{todoList.map((todo) => {
							return (
								<tr key={todo._id} className={todo.status ? "p-3 mb-2 bg-success text-white" : "p-3 mb-3 bg-secondary text-white"}>
									<td>{todo.title}</td>
									<td>{todo.text}</td>
									<td>{todo.status ? 'completed' : 'not-completed'}</td>
									<td>
										<button className="btn">
											<Link
												to={`/edit/${todo._id}`}
												className="nav-link btn border border-1 border-dark"
											>
												Edit
											</Link>
										</button>
										<button className="btn btn-info mr-1" onClick={()=>{
											handleTodoStatus(todo)
										}}>
											{todo.status ? 'not-done' : 'done'}
										</button>
										<button className="btn btn-danger ml-1" onClick={()=>{
											deleteTodo(todo)
										}}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				}
			</div>
		</div>
	);
}

export default TodosList;
