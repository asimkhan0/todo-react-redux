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
    addTodo      : (taskText) => dispatch(actions.addTodo(taskText))
  }
}

const todoContainer = connect(
  mapStateToProps,
  mapDispatchTOProps
)(todoComponent);

export default todoContainer;


