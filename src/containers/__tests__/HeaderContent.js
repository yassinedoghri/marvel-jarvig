import HeaderContent from "containers/HeaderContent";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("HeaderContent container", () => {
  it("renders without crashing", () => {
    renderInContext(<HeaderContent />);
  });
});
