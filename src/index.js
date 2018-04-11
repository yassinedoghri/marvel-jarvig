import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import baseStyles from './baseStyles';

const render = () => {
    baseStyles();
    ReactDOM.render(<App />, document.getElementById('root'));
};

render();
registerServiceWorker();
