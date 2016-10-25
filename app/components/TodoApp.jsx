import React from 'react';
import * as redux from 'react-redux';
import autoBind from 'react-autobind';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export class TodoApp extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }
  onLogout(e) {
    const {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }
  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default redux.connect()(TodoApp);
