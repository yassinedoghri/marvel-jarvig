import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer
} from "react-router-redux";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import rootReducer from "reducers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import theme from "theme";

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
