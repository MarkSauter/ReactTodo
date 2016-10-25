import React from 'react';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';

import * as actions from 'actions';

export class AddTodo extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    const todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="add-todo-form">
          <input
            type="text" ref="todoText" placeholder="What do you need to do?"
          />
          <button className="button expanded">Add todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
