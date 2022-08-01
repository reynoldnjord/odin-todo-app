import React from "react";
import { TodoComment } from "typescript";
import Todo from "./Todo";

interface project {
    content: string;
    isOpen: boolean;
}

const Project = (props:{projects:project[]}) => {


    return (
        <div>
            {props.projects.map((project) => (
                <Todo />
            ))}
        </div>
    );
}

export default Project;