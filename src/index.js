import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {watcherSaga} from './sagas/index';

import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'

import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'

import rootReducer from './reducers'

import baseStyles from './baseStyles';
import App from './containers/App';

const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...rootReducer,
        router: routerReducer,
    }),
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routeMiddleware)
);

store.subscribe(() => {
    console.log('Store changed', store.getState());
});

sagaMiddleware.run(watcherSaga);

const render = () => {
    baseStyles();
    ReactDOM.render((
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    ), document.getElementById('root'));
};

render();
registerServiceWorker();
