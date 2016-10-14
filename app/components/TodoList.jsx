var React = require('react');
var PropTypes = React.PropTypes;

var Todo = require('Todo');

class TodoList extends React.Component {
  render () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        <p>TodoList.jsx</p>
        {renderTodos()}
      </div>
    );
  }
}
TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}

module.exports = TodoList;
