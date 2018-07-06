import {connect} from 'react-redux';
import Todo from '../components/todo';
import * as actions from '../actions/todoActions';

function mapStateToProps(state) {
  return {todos: state}
}

function mapDispatchToProps(dispatch) {
  return {
    taskStatusChanged: (taskId, status) => dispatch(actions.changeTaskStatus(taskId, status)),
    taskEdit: (taskId, text) => dispatch(actions.changeTaskText(taskId, text)),
  }
}

const todoActions = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default todoActions;