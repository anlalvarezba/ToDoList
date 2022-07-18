// import './App.css';
import React from "react";
import { AppUI } from "./AppUI"

// const defaulttodos=[
//   {text: 'Cortar cabello', completed: true},
//   {text: 'Tomar curso intro de React', completed: false},
//   {text: 'Llorar con la llorona', completed: false}
// ]

function useLocalStorage(itemName, initialValue){

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setNewItem] = React.useState(initialValue);

  React.useEffect(() => {
    //Simulamos un segundo de delay de carga
    setTimeout(()=> {
      //Manejamos la tarea dentro de un try/catch por si ocurre algo
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;  

        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setNewItem(parsedItem);
      } catch(error) {
        //En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // Se puede usar la ultima parte del try/catch para terminar la carga
        setLoading(false);
      }
    } , 1000);
  }, []);

  

  const saveNewItem = (newItem) => {
    //Manejamos la tarea dentro de un try/catch por si ocurre algun error
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setNewItem(newItem);  
    } catch(error) {
      // En caso de algun error lo guardamos en el estado
      setError(error);
    }
  }
  //Para tener un mejor control de los datos retornados los regresamos dentro de un objeto
  return {
    item,
    saveNewItem,
    loading, 
    error,
  }
}

function App() {
  //Destructuramos los nuevos datos de nuestro custom hook
  const {
    item: todos,
    saveNewItem: saveTodos,
    loading, 
    error,
  } = useLocalStorage('TODOS_V1', []);
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
      loading={loading}
      error={error}
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
