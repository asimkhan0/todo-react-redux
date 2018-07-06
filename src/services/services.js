export function markTodo (todos, id, status) {
  const newState = todos.map((todo) => {
    if ( todo.id === id ){
      todo.status = status;
    }
    return todo;
  });
  return newState;
}

export function changeTodoText (todos, id, text) {
  const newState = todos.map((todo) => {
    if ( todo.id === id ){
      todo.text = text;
    }
    return todo;
  });
  return newState;
}