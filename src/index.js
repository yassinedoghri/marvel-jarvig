import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import rootReducer from './reducers'

import baseStyles from './baseStyles';
import App from './containers/App';

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log('Store changed', store.getState());
});

const render = () => {
    baseStyles();
    ReactDOM.render((
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    ), document.getElementById('root'));
};

render();
registerServiceWorker();
