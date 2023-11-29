import TodoReducer from './slice';
import {combineReducers} from 'redux';
export default combineReducers({todo: TodoReducer});
