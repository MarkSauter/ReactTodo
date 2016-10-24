import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import TodoApp from 'TodoApp';
import * as actions from 'actions'
var store = require('configureStore').configure();
import TodoAPI from 'TodoAPI'
import Login from 'Login'

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!appplicationStyle')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
