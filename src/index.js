import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

let { persistor, store } = configureStore();

ReactDOM.render(
    <App store={store} persistor={persistor}>
    </App>,
    document.getElementById('root')
);

registerServiceWorker();
