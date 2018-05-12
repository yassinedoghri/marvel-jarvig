import HomeScreen from "containers/HomeScreen";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("HomeScreen container", () => {
  it("renders without crashing", () => {
    renderInContext(<HomeScreen />);
  });
});
