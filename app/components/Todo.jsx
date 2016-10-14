import React, { PropTypes } from 'react'

class Todo extends React.Component {

  render () {
    var {id, text} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    );
  }

}

export default Todo;
