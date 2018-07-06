import {connect} from 'react-redux';
import todoComponent from '../components/todoComponent';
import * as actions from '../actions/todoActions';

function mapStateToProps(state) {
  return {
    todos: state
  }
}

function mapDispatchTOProps(dispatch) {
  return {
    addTodo      : (taskText) => dispatch(actions.addTodo(taskText)),
    // onEditTask     : taskId => dispatch(actions.updateTask(taskId)),
    // onRemoveTask   : taskId => dispatch(actions.removeTask(taskId)),
    // onTaskCompleted: taskId => dispatch(actions.taskCompleted(taskId)),
    // onUndoCompleted: taskId => dispatch(actions.undoCompleted(taskId))
  }
}

const todoContainer = connect(
  mapStateToProps,
  mapDispatchTOProps
)(todoComponent);

export default todoContainer;


