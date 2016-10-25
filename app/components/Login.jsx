import React from 'react';
import * as redux from 'react-redux';
import autoBind from 'react-autobind';

import * as actions from 'actions';

class Login extends React.Component {
  constructor() {
    super();
    autoBind(this);
  }
  onLogin() {
    const {dispatch} = this.props;

    dispatch(actions.startLogin());
  }
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHub account below.
              </p>
              <button
                className="button" onClick={this.onLogin}>Login With GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default redux.connect()(Login);
