import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

//Component
import TodosList from "./components/TodosList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

function App() {
	return (
		<div className="App">
			<div>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<Link className="nav-link active" to="/">
							Todo's List
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/create">
							Create Todo
						</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/" component={TodosList} />
				<Route exact path="/create" component={CreateTodo} />
				<Route exact path="/edit/:id" component={EditTodo} />
			</Switch>
		</div>
	);
}

export default App;
