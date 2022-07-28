// import './App.css';
import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader/index";
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm/index';
import { TodosError } from '../TodosError/index';
import { TodosLoading } from '../TodosLoading/index';
import { EmptyTodos } from '../EmptyTodos/index';

// const defaulttodos=[
//   {text: 'Cortar cabello', completed: true},
//   {text: 'Tomar curso intro de React', completed: false},
//   {text: 'Llorar con la llorona', completed: false}
// ]

function App() {
  const {
    error ,
    loading,
    searchedTodos ,
    completeTodo ,
    deleteTodo ,
    openModal ,
    setOpenModal ,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
  } = useTodos();

  return(
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
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
                <TodoForm 
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                
                />
              </Modal>
            )}              
      <CreateTodoButton setOpenModal={setOpenModal}/>
    </React.Fragment>);
}

export default App;
