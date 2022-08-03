import React from "react";
import './todoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}){
    return (
        <h2 
        className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            Has compleatado {completedTodos} de {totalTodos} ToDos
        </h2>
    )
}

export {TodoCounter};