import React from "react";
//importamos nuestro contexto
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal/index';


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
              { openModal === true && (
                <Modal>
                <p>{searchedTodos[0]?.text}</p>
                </Modal>
              )}          
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
      </React.Fragment>);
}

export{ AppUI };