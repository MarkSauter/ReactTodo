import React, { PropTypes } from 'react'
import moment from 'moment'

class Todo extends React.Component {

  render () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      
      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    };
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <span>{text}</span>
        <p>{renderDate()}</p>
      </div>
    );
  }

}

export default Todo;
