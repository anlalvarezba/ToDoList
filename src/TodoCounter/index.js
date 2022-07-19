import React from "react";
import { TodoContext } from "../TodoContext";
import './todoCounter.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has compleatado {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export {TodoCounter};