import React from "react";
import './todoCounter.css';

function TodoCounter({totalTodos, completedTodos}){
    return (
        <h2 className="TodoCounter">Has compleatado {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export {TodoCounter};