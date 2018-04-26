import React from "react";
import { renderInContext } from "testHelpers";
import MainContent from "containers/MainContent";

describe("MainContent container", () => {
  it("renders without crashing", () => {
    renderInContext(<MainContent />);
  });
});
