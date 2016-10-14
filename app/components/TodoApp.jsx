var React = require('react');
var PropTypes = React.PropTypes;

var TodoList = require('TodoList');

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

  render () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }

}

module.exports = TodoApp;
