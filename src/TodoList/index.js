// import { PROPERTY_TYPES } from "@babel/types";
import React from "react";
import './todoList.css';

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList };