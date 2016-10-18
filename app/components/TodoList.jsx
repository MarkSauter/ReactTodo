import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

import Todo from 'Todo'

export class TodoList extends React.Component {
  render () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do...</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
