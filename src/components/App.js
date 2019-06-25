import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

function App() {
  const todoItems = todosData.map(todo => (
    <TodoItem key={todo.id} todo={todo} />
  ));
  return <div className="todo-list">{todoItems}</div>;
}

export default App;
