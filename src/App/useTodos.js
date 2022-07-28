import React from "react";
import { useLocalStorage } from './useLocalStorage';


function useTodos(){
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
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };

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

      return(
        {
            loading ,
            error ,
            totalTodos ,
            completedTodos ,
            searchValue ,
            setSearchValue ,
            searchedTodos ,
            completeTodo ,
            addTodo , 
            deleteTodo ,
            openModal ,
            setOpenModal  ,
        }
      );
}

//Exportamos nuestro proveedro y nuestro contexto, en el context tambien el consumer, para acceder a nuestro contexto
export { useTodos };