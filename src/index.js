import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import TodoContainer from './containers/todoContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <TodoContainer />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
