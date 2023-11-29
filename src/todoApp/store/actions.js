let nextTodoId = 0;
const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  text,
});
const completed = text => ({
  type: 'COMPLETE',
  text,
});
const deleteTodo = text => ({
  type: 'DEL_TODO',
  text,
});
const updateTodo = data => ({
  type: 'UPDATE',
  data,
});
export {addTodo, deleteTodo, completed, updateTodo};
