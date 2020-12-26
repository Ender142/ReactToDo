import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });

  function handleInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;