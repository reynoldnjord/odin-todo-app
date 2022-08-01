import React from "react";
import Sidebar from "./components/Sidebar";
import Todo from "./components/Todo";
import "./styles/App.css";

function App() {
	return (
		<div className="app">
			<Sidebar />
			<Todo />
		</div>
	);
}

export default App;
