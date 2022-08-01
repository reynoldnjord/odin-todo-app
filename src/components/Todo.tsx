import React, { ChangeEvent, useState } from "react";

interface todo {
	content: string;
	isCompleted: boolean;
}

const Todo = () => {
	const [todos, setTodos] = useState<todo[]>([
		{
			content: "Pickup dry cleaing",
			isCompleted: true,
		},
		{
			content: "Get Haircut",
			isCompleted: false,
		},
		{
			content: "Build a todo app",
			isCompleted: false,
		},
	]);

	const removeTodoAtIndex = (
		e: React.MouseEvent<HTMLButtonElement>,
		i: number
	) => {
		e.preventDefault();
		if (i === 0 && todos.length === 1) return;
		setTodos((todo) =>
			todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
		);
		setTimeout(() => {
			(document.forms[0].elements[i + 1] as HTMLElement).focus();
		}, 0);
	};

	const createTodoAtIndex = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const newTodos = [...todos];
		newTodos.splice(0, 0, {
			content: "",
			isCompleted: false,
		});
		setTodos(newTodos);
		setTimeout(() => {
			(document.forms[0].elements[0] as HTMLElement).focus();
		}, 0);
	};

	const updateTodoAtIndex = (e: ChangeEvent<HTMLInputElement>, i: number) => {
		const newTodos = [...todos];
		newTodos[i].content = e.target.value;
		setTodos(newTodos);
	};

	const toggleTodoCompleteAtIndex = (i: number) => {
		const temporaryTodos = [...todos];
		temporaryTodos[i].isCompleted = !temporaryTodos[i].isCompleted;
		setTodos(temporaryTodos);
	};

	return (
		<div className="todo">
			<form className="todo-list">
				<ul>
					{todos.map((todo, i) => (
						<div className={`task ${todo.isCompleted && "todo-is-completed"}`}>
							<div
								className={"checkbox"}
								onClick={() => toggleTodoCompleteAtIndex(i)}
							>
								{todo.isCompleted && <span>&#x2714;</span>}
							</div>
							<input
								type="text"
								value={todo.content}
								onChange={(e) => updateTodoAtIndex(e, i)}
							/>
							<button onClick={(e) => removeTodoAtIndex(e, i)}>Delete</button>
						</div>
					))}
				</ul>
				<button className="add-task" onClick={(e) => createTodoAtIndex(e)}>
					+Add Task
				</button>
			</form>
		</div>
	);
};

export default Todo;
