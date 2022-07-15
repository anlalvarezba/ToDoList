// import './App.css';
import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaulttodos=[
  {text: 'Cortar cabello', completed: true},
  {text: 'Tomar curso intro de React', completed: false},
  {text: 'Llorar con la llorona', completed: false}
]

function App() {
  const [todos, setTodos] = React.useState(defaulttodos);
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

  return (
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
            text={todo.text}/>
        ))} 
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
    );
}

export default App;
