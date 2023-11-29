import createStore from 'redux';
interface Item {
  text: String;
  completed: Boolean;
}
interface Actions {
  type: String;
  text: String;
}
const initialState: Item[] = [
  {text: 'Lau nhà', completed: false},
  {text: 'Rửa bát', completed: false},
  {text: 'Giặt đồ', completed: true},
];
function TodoReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case 'ADD_TODO':
      return [{text: action.text, completed: false}, ...state];
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
