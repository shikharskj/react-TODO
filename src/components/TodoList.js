import React from 'react';
//import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, inputText, filteredTodos }) => {
    
    return( 
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map( (todo) => (
                    <Todo 
                        text = {todo.text} 
                        key = {todo.id} 
                        todos = {todos}  
                        todo = {todo}
                        setTodos = {setTodos} 
                    />                    
                ))}
            </ul>
        </div>
    );
};


export default TodoList;