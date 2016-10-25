import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch UPDATE_TODO action on click', () => {
    const todoData = {
      id: 199,
      text: 'Test features',
      completed: true,
    };
    const action = actions.startToggleTodo(todoData.id, !todoData.completed);
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(
      <Todo {...todoData} dispatch={spy}/>
    );
    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
