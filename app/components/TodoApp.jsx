import React, { PropTypes } from 'react'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

class TodoApp extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Complete Todo App'
        }, {
          id: 4,
          text: 'Go to work...'
        }
      ]
    }
  }
  handleAddTodo (text) {
    alert('new todo: ' + text);
  }
  render () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

}

export default TodoApp;
