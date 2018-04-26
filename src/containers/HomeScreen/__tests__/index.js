import React from "react";
import { renderInContext } from "testHelpers";
import HomeScreen from "containers/HomeScreen";

describe("HomeScreen container", () => {
  it("renders without crashing", () => {
    renderInContext(<HomeScreen />);
  });
});
