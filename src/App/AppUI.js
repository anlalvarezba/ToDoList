import React from "react";
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';

function AppUI ({
    totalTodos      ,     
    completedTodos  ,
    searchValue     ,  
    setSearchValue  ,
    searchedTodos   ,    
    completeTodo    ,   
    deleteTodo   
}){
return(
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            completed={todo.completed} 
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))} 
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>);
}

export{ AppUI };