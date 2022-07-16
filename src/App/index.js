// import './App.css';
import React from "react";
import { AppUI } from "./AppUI"

// const defaulttodos=[
//   {text: 'Cortar cabello', completed: true},
//   {text: 'Tomar curso intro de React', completed: false},
//   {text: 'Llorar con la llorona', completed: false}
// ]

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setNewItem] = React.useState(parsedItem);
  const saveNewItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setNewItem(newItem);
  }

  return [
    item,
    saveNewItem
  ];
}

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

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

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      />);
}

export default App;
