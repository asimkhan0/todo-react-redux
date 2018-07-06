import React from 'react';
import ActionBox from "../containers/ActionBox";
import AddTodo from "./AddTodo";

export default class Todo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
    }
  }
  
  toggleActionBox = () => {
    this.setState({isEditMode: !this.state.isEditMode});
  }
  
  taskStatusChanged = (taskId, status) => {
    this.props.taskStatusChanged(taskId, status);
  }
  
  editTask = (newText) => {
    console.log('editTask');
    this.props.taskEdit(this.props.todo.id, newText);
    this.props.onUpdate();
    this.toggleActionBox();
  }
  
  render() {
    const {text, status, id} = this.props.todo;
    const {isEditMode} = this.state;
    if(!isEditMode) {
    return (
      <div className="box">
        <h3>{text}</h3>
        <p>{status}</p>
        <div className="box-hvr">
          {status === 'Active' ?
            <button onClick={() => this.taskStatusChanged(id,'Completed')}>Completed</button>:
            <button onClick={() => this.taskStatusChanged(id,'Active')} className="undo">Undo</button>
          }
          <p>|</p>
          <button onClick={() => this.toggleActionBox()}>Edit</button>
        </div>
      </div>
    )} else
      {
        return (
          <AddTodo editTask={this.editTask} text={text} id={id} editMode={true}/>
        )
      }
  }
}
