import React from "react";
import './todoItem.css';



function TodoItem(props){
    const onCompleteButton = () => {
        alert("Ya completaste el todo " + props.text);
    };
    
    const onDeleteButton = () => {
        alert("Borraste el todo " + props.text);
    };


    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onCompleteButton}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDeleteButton}>
                X
            </span>
        </li>
    )
}

export {TodoItem};