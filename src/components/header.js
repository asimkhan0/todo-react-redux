import React from 'react';

export const Header = (props) => {
  debugger;
  return (
    <div>
      <h2>Simple Task</h2>
      <p>Hello User!</p>
      <hr />
      <h1>Your Tasks</h1>
      { props.activeTasks !== null ? props.activeTasks !== 0?
        <div>
          <h3>Complete All Tasks</h3>
          <p>You have {props.activeTasks} active tasks</p>
        </div> :
        <div>
          <h3>All Tasks Completed</h3>
          <p>Well Done!</p>
        </div>: null
      }
    </div>
  );
}