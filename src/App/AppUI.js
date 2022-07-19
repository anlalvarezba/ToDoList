import React from "react";
//importamos nuestro contexto
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';


function AppUI (){
return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {/* Podemos acceder a nuestro contexto con el consumer */}
      <TodoContext.Consumer>
          {({
            error ,
            loading,
            searchedTodos ,
            completeTodo ,
            deleteTodo ,
          }) => (
            <TodoList>
              {/* Mostramos un mensaje en caso de que ocurra algun error */}
              {error && <p>Desesperate, hubo un error.</p>}
              {/* Mostramos un mensaje de cargando, cuando la aplicacion esta cargando los datos. */}
              {loading && <p>Estamos cargando, no desesperes.</p>}
              {/* Si terminamos de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO. */}
              {(!loading && !searchedTodos.lenght) && <p>!Crea tu primer TODO!</p>}
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
          )}
        </TodoContext.Consumer>
      
      <CreateTodoButton/>
    </React.Fragment>);
}

export{ AppUI };