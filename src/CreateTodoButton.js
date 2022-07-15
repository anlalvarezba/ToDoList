import React from "react";
import './createTodoButton.css';

function CreateTodoButton(){
    return(
        <button 
            className="CreateTodoButton"
            onClick={()=> console.log("Aca se abre el modal.")}>
            +
        </button>
    )
}

export {CreateTodoButton};