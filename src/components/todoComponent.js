import React, {Component} from 'react';
import Todo from "../containers/TodoActions";
import AddTodo from "./AddTodo";
import {Header} from "./header";
import {TopHeader} from "./TopHeader";

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
    this.setState({activeTasks: activeTasks.length});
  }
  render() {
        return (
          <div className={`todo`}>
            <TopHeader/>
            <div className="inner-info">
            <Header activeTasks={this.state.activeTasks}/>
            <div className="main-wrap">
              {this.state.todos.map((value) => {
                return <Todo todo={value} key={value.id} onUpdate={this.calculateActiveTasks}/>
              })
              }
              {!this.state.showAddTodo ?
                <div className="box no-border">
                  <div className="add-tasks">
                    <button onClick={this.addTodoInit}> +Add Task</button>
                  </div>
                </div>:
                <AddTodo addTask={this.addTodo}/>
              }
            </div>
            </div>
          </div>
        )
    }
}