import React from 'react';
import { Counter } from './features/counter/Counter';
import Message from './features/message/Message'
import TodoList from './features/todoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Message />
      <TodoList />
    </div>
  );
}

export default App;
