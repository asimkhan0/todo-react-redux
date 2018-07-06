import {connect} from 'react-redux';
import ActionBox from '../components/ActionBox';
import * as actions from '../actions/todoActions';

function mapStateToProps(state) {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    taskStatusChanged: (taskId, status) => dispatch(actions.changeTaskStatus(taskId, status)),
    taskEdit: (taskId, text) => dispatch(actions.changeTaskText(taskId, text)),
  }
}

const actionBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBox);

export default actionBox;


