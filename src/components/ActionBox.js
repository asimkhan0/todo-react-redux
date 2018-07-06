import React from 'react';
import AddTodo from "./AddTodo";

export default class ActionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false
    }
  }
  onChangeStatus = (id, newStatus) => {
    this.props.taskStatusChanged(id, newStatus);
    this.props.toggleActionBox();
    this.props.onUpdate();
  }
  onEditToggle = () => {
    this.setState({showEdit: !this.state.showEdit},() => {
      if(!this.state.showEdit){
        this.props.toggleActionBox();
      }
    });
  }
  editTask = (newText) => {
    console.log('editTask');
    this.props.taskEdit(this.props.todo.id, newText);
    this.props.onUpdate();
    this.onEditToggle();
  }
  
  render() {
    const {text, status, id} = this.props.todo;
    return(
      <div>
        {this.state.showEdit? <AddTodo editTask={this.editTask} text={text} id={id} editMode={true}/>:
        status === 'Active' ?
          <button className={'completeAction'}
                  onClick={() => this.onChangeStatus(id,'Completed')}> Complete </button>:
          <button className={'undoAction'}
                  onClick={() => this.onChangeStatus(id,'Active')}> Undo </button>}
        {!this.state.showEdit?<button className={'editAction'} onClick={this.onEditToggle}> Edit </button>
          :null}
      </div>
    );
  }
}

// () => this.props.onChangeStatus(this.props.taskId, 'Completed')
// () => this.props.onChangeStatus(this.props.taskId, 'Active')
// onClick={}