import {createStore} from 'redux';
import todoReducers from './reducers/todoReducers';

const store = createStore(todoReducers);

export default store;
