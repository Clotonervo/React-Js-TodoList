import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos"
// https://www.youtube.com/watch?v=nUl5QLkVdvU

function App() {
  const [todos, setTodos] = useState([]);
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, []);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos (
      todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          React Todo
        </p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
          Learn React
      </header>
    </div>
  );
}

export default App;
