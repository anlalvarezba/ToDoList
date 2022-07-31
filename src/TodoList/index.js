// import { PROPERTY_TYPES } from "@babel/types";
import React from "react";
import './todoList.css';

function TodoList(props){
    return(
        <section className="TodoList-container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()} 
        {(!props.loading && !props.searchedTodos.lenght) && props.onEmptyTodos()}
        {props.searchedTodos.map(todo => props.render(todo))}
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };