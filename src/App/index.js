// import './App.css';
import React from "react";
import { TodoProvider } from '../TodoContext/index';
import { AppUI } from "./AppUI";

// const defaulttodos=[
//   {text: 'Cortar cabello', completed: true},
//   {text: 'Tomar curso intro de React', completed: false},
//   {text: 'Llorar con la llorona', completed: false}
// ]

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
