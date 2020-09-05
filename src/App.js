import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography";

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

        <Typography style={{ padding: 16 }} variant="h2">
          React Todo
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
          Learn React
    </div>
  );
}

export default App;
