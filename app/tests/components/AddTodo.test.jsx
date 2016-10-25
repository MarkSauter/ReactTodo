import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import * as actions from 'actions';
import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch addTodo when valid todo text', () => {
    const todoText = 'New todo';
    const action = actions.startAddTodo(todoText);

    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));


    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    const todoText = '';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
