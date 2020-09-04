import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storageTodos = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)))
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, []);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          React Todo
        </p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
          Learn React
      </header>
    </div>
  );
}

export default App;
