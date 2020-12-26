import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./forms/TodoForm";
import TodoList from "./forms/TodoList";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => ({id: doc.id, task: doc.data()})));
      setTodos(snapshot.docs.map(doc => ({id: doc.data().todos.id, task: doc.data().todos.task})))
    })
  }, []);
  
  // useEffect(() => {
  //   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageTodos) {
  //     setTodos(storageTodos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
    
    db.collection('todos').add({
      todos: todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  function removeTodo(id) {
    db.collection('todos').where("todos.id", "==", id).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });;
    //setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Ender's Maestro Challange
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;