import React from "react";
//importamos nuestro contexto
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm/index';
import { TodosError } from '../TodosError/index';
import { TodosLoading } from '../TodosLoading/index';
import { EmptyTodos } from '../EmptyTodos/index';


function AppUI (){
  //Desestructuramos los valores de nuestro contexto
  const {
    error ,
    loading,
    searchedTodos ,
    completeTodo ,
    deleteTodo ,
    openModal ,
    setOpenModal ,
  } = React.useContext(TodoContext);
  return(
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
              <TodoList>
                {/* Mostramos un mensaje en caso de que ocurra algun error */}
                {error && <TodosError error={error}></TodosError>}
                {/* Mostramos un mensaje de cargando, cuando la aplicacion esta cargando los datos. */}
                {loading && <TodosLoading></TodosLoading>} 
                {/* Si terminamos de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO. */}
                {(!loading && !searchedTodos.lenght) && <EmptyTodos></EmptyTodos>}
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
              { !!openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}              
        <CreateTodoButton setOpenModal={setOpenModal}/>
      </React.Fragment>);
}

export{ AppUI };