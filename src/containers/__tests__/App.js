import App from "containers/App";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("App", () => {
  it("renders without crashing", () => {
    renderInContext(<App />);
  });
});
