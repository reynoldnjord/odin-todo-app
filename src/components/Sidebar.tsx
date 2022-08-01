import React, { useState, ChangeEvent } from "react";
import Header from "./Header";
import Todo from "./Todo";

const Sidebar = () => {
	interface project {
		content: string;
		isOpen: boolean;
	}

	const [projects, setProjects] = useState<project[]>([
		{
			content: "Project 1",
			isOpen: false,
		},
		{
			content: "Project 2",
			isOpen: true,
		},
		{
			content: "Project 3",
			isOpen: false,
		},
	]);

	const removeProjectAtIndex = (
		e: React.MouseEvent<HTMLButtonElement>,
		i: number
	) => {
		e.preventDefault();
		if (i === 0 && projects.length === 1) return;
		setProjects((todo) =>
			projects.slice(0, i).concat(projects.slice(i + 1, projects.length))
		);
		setTimeout(() => {
			(document.forms[0].elements[i + 1] as HTMLElement).focus();
		}, 0);
	};

	const createProjectAtIndex = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const newTodos = [...projects];
		newTodos.splice(0, 0, {
			content: "",
			isOpen: true,
		});
		setProjects(newTodos);
		setTimeout(() => {
			(document.forms[0].elements[0] as HTMLElement).focus();
		}, 0);
	};

	const updateProjectAtIndex = (
		e: ChangeEvent<HTMLInputElement>,
		i: number
	) => {
		const newTodos = [...projects];
		newTodos[i].content = e.target.value;
		setProjects(newTodos);
	};

    const moveToProject = (e:React.MouseEvent<HTMLButtonElement>) => {
        return (
            <Todo />
        );
    }

	return (
		<div className="sidebar">
			<div className="project-list">
				<ul>
					{projects.map((project, i) => (
						<div className="project">
							<input
								className="project-content"
								value={project.content}
								onChange={(e) => updateProjectAtIndex(e, i)}
							/>
                            <button onClick={e => moveToProject(e)}>Move To</button>
							<button
								className="button-remove"
								onClick={(e) => removeProjectAtIndex(e, i)}
							>
								Remove
							</button>
						</div>
					))}
				</ul>
				<button
					className="add-project-button"
					onClick={(e) => createProjectAtIndex(e)}
				>
					+Add Project
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
