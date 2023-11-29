import createStore from 'redux';
interface Item {
  id: Number;
  text: String;
  completed: Boolean;
}
interface Actions {
  type: String;
  text: String;
  id: Number;
}
const initialState: Item[] = [];
function TodoReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {text: action.text, completed: false}];
    case 'COMPLETE':
      return state.map(todo =>
        todo.text === action.text ? {...todo, completed: true} : todo,
      );
    case 'DEL_TODO':
      return state.filter(t => t.text !== action.text);
    case 'UPDATE':
      return [...action.data];
    default:
      return state;
  }
}
export default TodoReducer;
