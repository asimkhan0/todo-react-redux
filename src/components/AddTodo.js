import React from 'react';

export default class AddTodo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      id: -1
    }
  }
  
  componentDidMount() {
    if(this.props.text && this.props.id!==undefined) {
      this.setState({text: this.props.text, id:this.props.id});
    }
  }
  
  onTextChange = (event) => {
    this.setState({text: event.target.value});
  }
  
  render() {
    return(
      <div className="box">
        <div className="save-tasks">
        <input type='text'
               value={this.state.text }
               placeholder={`Enter Task Name`}
               ref={text => this.taskText = text}
               onChange={this.onTextChange}
        />
          <p>
            <button onClick={() => {this.props.editMode? this.props.editTask(this.taskText.value):
              this.props.addTask(this.taskText.value)}}> Save </button>
          </p>
        
      </div>
      </div>
    );
  }
}
