import React from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        del={this.props.del}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
