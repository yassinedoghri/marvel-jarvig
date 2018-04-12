import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import baseStyles from './baseStyles';
import { BrowserRouter as Router } from 'react-router-dom';

const render = () => {
    baseStyles();
    ReactDOM.render((
        <Router>
            <App />
        </Router>
    ), document.getElementById('root'));
};

render();
registerServiceWorker();
