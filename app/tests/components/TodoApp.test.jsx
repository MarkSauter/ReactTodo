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
});
