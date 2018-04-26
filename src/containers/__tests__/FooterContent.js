import React from "react";
import { renderInContext } from "testHelpers";
import FooterContent from "containers/FooterContent";

describe("FooterContent container", () => {
  it("renders without crashing", () => {
    renderInContext(<FooterContent />);
  });
});
