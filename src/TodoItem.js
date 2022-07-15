import React from "react";
import './todoItem.css';



function TodoItem(props){
    const [completedState, setCompleteState] =React.useState(props.completed)
    const onCompleteButton = () => {
        alert("Ya completaste el todo " + props.text);
        setCompleteState(!completedState);
    };
    
    const onDeleteButton = () => {
        alert("Borraste el todo " + props.text);
    };


    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${completedState && 'Icon-check--active'}`}
                onClick={onCompleteButton}>
                √
            </span>
            <p className={`TodoItem-p ${completedState && 'TodoItem-p--complete'}`}>
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