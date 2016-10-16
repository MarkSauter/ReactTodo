import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import $ from 'jQuery'

import TodoApp from 'TodoApp'

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value with handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    var todo = todoApp.state.todos[0];

    expect(todo.completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todo.completed).toBe(true);
  });
});
