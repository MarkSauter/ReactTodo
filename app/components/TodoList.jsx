import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

import Todo from 'Todo'
import TodoAPI from 'TodoAPI'

export class TodoList extends React.Component {
  render () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do...</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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
    return state;
  }
)(TodoList);
