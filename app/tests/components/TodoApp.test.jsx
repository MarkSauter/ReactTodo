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
    var todo = todoApp.state.todos[0];

    expect(todo.text).toBe(todoText);
    expect(todo.createdAt).toBeA('number');
  });

  it('should toggle completed value with handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    var todo = todoApp.state.todos[0];

    expect(todo.completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todo.completed).toBe(true);
    expect(todo.completedAt).toBeA('number');
  });

  it('should toggle completed to incomplete', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    var todo = todoApp.state.todos[0];

    expect(todo.completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todo.completed).toBe(false);
    expect(todo.completedAt).toNotExist();
  });
});
