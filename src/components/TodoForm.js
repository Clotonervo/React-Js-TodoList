import React, { useState } from "react";
import uuid from "uuid";
import {Textfield, Button, TextField} from "@material-ui/core";

function TodoForm({ addTodo }) {
 const [todo, setTodo] = useState({
     id: "",
     task: "",
     completed: false
 });

 function handlTaskInputChange(e) {
     setTodo({ ...todo, task: e.target.value});
 }

 function handleSubmit(e) {
     e.preventDefault();
     if (todo.task.trim()) {
         addTodo({...todo, id: uuid.v4() });
         setTodo({ ...todo, task: ""});
     }
 }

 return (
     <form className="todo-form" onSubmit={handleSubmit}>
         <TextField
         label= "Insert Todo Task"
         name = "task"
         type = "text"
         value = {todo.task}
         onChange = {handlTaskInputChange}
         />
         <Button type="submit">submit</Button>
     </form>
 );
}

export default TodoForm