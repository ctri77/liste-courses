import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './Reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(allReducers);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>


, document.getElementById('root'));


serviceWorker.unregister();