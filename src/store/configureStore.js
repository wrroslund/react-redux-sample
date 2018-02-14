import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootReducer from '../reducers';

const config = {
    key: 'root', // key is required
    storage // storage is now required
};  

const reducer = persistReducer(config, rootReducer);
  
const middleware = [ thunk ];
if (process.env.REACT_APP_LOGGING === 'true') {
    middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
    applyMiddleware(...middleware)
);

export default function configureStore () {
    let store = createStore(reducer, enhancers);
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }
    let persistor = persistStore(store);
    
    return { persistor, store };
}