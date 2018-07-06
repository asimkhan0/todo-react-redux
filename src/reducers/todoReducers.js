import {types} from '../constants/index';
import {markTodo, changeTodoText} from '../services/services';

export default function TodoReducer(state = [], action) {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];
    case types.status_changed:
      return markTodo(state, action.payload.id,action.payload.status);
    case types.text_changed:
      return changeTodoText(state, action.payload.id,action.payload.text);
    default:
      return state;
  }
}