import React from "react";
import './todoCounter.css';

function TodoCounter({ total, completed }){
    return (
        <h2 className="TodoCounter">Has compleatado {completed} de {total} ToDos</h2>
    )
}

export {TodoCounter};