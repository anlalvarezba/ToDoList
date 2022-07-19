import React from "react";
import { useLocalStorage } from './useLocalStorage';

//Al crear el contexto tambien podemos pasarle un valor inicial entre los parentesis
const TodoContext = React.createContext();

function TodoProvider(props){
    //Nos traemos todo el estado y las funciones de nuestra aplicacion que queremos sean globales
    const {
        item: todos,
        saveNewItem: saveTodos,
        loading, 
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed ).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
      if(!searchedTodos >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter( todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      //Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibira a toda nuestra aplicacion, por eso necesitamos la prop children.
      return(
        <TodoContext.Provider value={{
            loading ,
            error ,
            totalTodos ,
            completedTodos ,
            searchValue ,
            setSearchValue ,
            searchedTodos ,
            completeTodo ,
            deleteTodo ,
            openModal ,
            setOpenModal  ,
        }}>
            {props.children}
        </TodoContext.Provider>
      );
}

//Exportamos nuestro proveedro y nuestro contexto, en el context tambien el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };