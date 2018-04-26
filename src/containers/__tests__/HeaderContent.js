import React from "react";
import { renderInContext } from "testHelpers";
import HeaderContent from "containers/HeaderContent";

describe("HeaderContent container", () => {
  it("renders without crashing", () => {
    renderInContext(<HeaderContent />);
  });
});
