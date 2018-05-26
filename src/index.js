import App from "containers/App";

import createHistory from "history/createBrowserHistory";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer
} from "react-router-redux";

import rootReducer from "reducers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import watcherSaga from "sagas";
import { baseStyles, registerServiceWorker } from "utils";

const history = createHistory({ basename: process.env.PUBLIC_URL });

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routeMiddleware)
  )
);

sagaMiddleware.run(watcherSaga);

const render = () => {
  baseStyles();
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};

render();
registerServiceWorker();
