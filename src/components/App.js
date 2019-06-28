import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todos: updateTodos
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}
export default App;
