import React from "react";
import { renderInContext } from "testHelpers";
import App from "containers/App";

describe("App", () => {
  it("renders without crashing", () => {
    renderInContext(<App />);
  });
});
