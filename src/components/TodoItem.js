import React from 'react';

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p
        style={{
          textDecoration: props.todo.completed ? 'line-through' : 'none'
        }}
      >
        {props.todo.text}
      </p>
    </div>
  );
}

export default ToDoItem;
