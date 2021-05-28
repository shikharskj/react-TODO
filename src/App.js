import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //useEffect
  useEffect( () => {
    filterHandler();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter( todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter( todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header> TODO List </header>
      <Form
        todos = {todos} 
        setTodos = {setTodos} 
        inputText = {inputText} 
        setInputText = {setInputText} 
        setStatus = {setStatus}
      />
      <TodoList 
        todos = {todos}  
        setTodos = {setTodos} 
        inputText = {inputText} 
        filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
