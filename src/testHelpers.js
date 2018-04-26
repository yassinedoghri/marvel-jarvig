import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import theme from "theme";
import { ThemeProvider } from "styled-components";
import rootReducer from "reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer
} from "react-router-redux";

const history = createMemoryHistory("/");
const routeMiddleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  applyMiddleware(routeMiddleware)
);

export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
}

export function renderInContext(component) {
  return renderer.create(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export function ShallowRenderInContext(component) {
  const renderer = new ShallowRenderer();
  return renderer.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}
