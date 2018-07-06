import React from 'react';

export const Header = (props) => {
  return (
    <div>
        <h2>Your Tasks</h2>
        { props.activeTasks !== null ? props.activeTasks !== 0?
        <div className="alert-box">
          <h6>Complete all tasks</h6>
          <span>You have {props.activeTasks} active tasks</span>
        </div>:
          <div className="alert-box success-box">
            <h6>All Tasks Completed</h6>
            <span>Well Done!</span>
          </div>: null}
    </div>
  );
}