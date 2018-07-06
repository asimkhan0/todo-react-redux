import React, {Component} from 'react';
import Todo from "./todo";
import AddTodo from "./AddTodo";
import {Header} from "./header";

export default class TodoComponent extends Component {
 constructor(props) {
   super(props);
   this.state = {
     todos: [],
     showAddTodo: false,
     activeTasks: null
   };
 }
  componentDidMount() {
  }
  
  addTodoInit = () => {
   this.setState({showAddTodo: true});
  }
  
  addTodo = (taskText) => {
    this.props.addTodo(taskText);
    this.setState({showAddTodo: false});
    
  }
  
  markAsCompleted = (taskId, status) => {
   this.props.changeTaskStatus(taskId, status);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({todos: nextProps.todos},
      () => this.calculateActiveTasks());
  }
  calculateActiveTasks = () => {
    const activeTasks = this.state.todos.filter((todo) => todo.status === 'Active');
    console.log(activeTasks.length);
    this.setState({activeTasks: activeTasks.length});
  }
  render() {
        return (
          <div>
            <Header activeTasks={this.state.activeTasks}/>
            <ul>
              {this.state.todos.map((value) => {
                return <Todo todo={value} key={value.id} onUpdate={this.calculateActiveTasks}/>
              })
              }
            </ul>
            <button onClick={this.addTodoInit}> Add Task </button>
            {this.state.showAddTodo ?
              <AddTodo addTask={this.addTodo}/>: null
            }
          </div>
        )
    }
}