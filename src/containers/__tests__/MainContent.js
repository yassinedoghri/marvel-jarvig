import MainContent from "containers/MainContent";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("MainContent container", () => {
  it("renders without crashing", () => {
    renderInContext(<MainContent />);
  });
});
