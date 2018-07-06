import {types} from '../constants/index';
//Action Creator

// onAddTask
// onEditTask
// onRemoveTask
// onTaskCompleted
// onUndoCompleted
let todoId = 0;

export const addTodo = (taskText) => {
    return {
        type: types.add,
        payload: {
          id: todoId++,
          text: taskText,
          status: 'Active'
        }
    }
}

export const changeTaskStatus = (taskId, status) => {
  return {
    type: types.status_changed,
    payload: {
      id: taskId,
      status
    }
  }
}

export const changeTaskText = (taskId, text) => {
  return {
    type: types.text_changed,
    payload: {
      id: taskId,
      text
    }
  }
}