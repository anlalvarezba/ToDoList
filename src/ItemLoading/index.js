import React from "react";
import { TodoContext } from "../TodoContext";
import './ItemLoading.css';

function ItemLoading(){
    return (
        <React.Fragment>
        <li className="TodoItemLoading ItemLoading-1">
            <span 
                className={`IconLoading IconLoading-check`}>
                √
            </span>
            <p className={`TodoItemLoading-p`}>
                .
            </p>
            <span 
                className="IconLoading IconLoading-delete">
                X
            </span>
        </li>
        <li className="TodoItemLoading ItemLoading-2">
            <span 
                className={`IconLoading IconLoading-check`}>
                √
            </span>
            <p className={`TodoItemLoading-p`}>
                ..
            </p>
            <span 
                className="IconLoading IconLoading-delete">
                X
            </span>
        </li>
        <li className="TodoItemLoading ItemLoading-3">
            <span 
                className={`IconLoading IconLoading-check`}>
                √
            </span>
            <p className={`TodoItemLoading-p`}>
                ...
            </p>
            <span 
                className="IconLoading IconLoading-delete">
                X
            </span>
        </li>
        <li className="TodoItemLoading ItemLoading-4">
            <span 
                className={`IconLoading IconLoading-check`}>
                √
            </span>
            <p className={`TodoItemLoading-p`}>
                ....
            </p>
            <span 
                className="IconLoading IconLoading-delete">
                X
            </span>
        </li>
        </React.Fragment>     
           
    );
}

export { ItemLoading }