import { IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import React from "react";

function Todo({ todo, removeTodo }) {
  

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Typography
        variant="body1"
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;