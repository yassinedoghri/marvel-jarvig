import FooterContent from "containers/FooterContent";
import React from "react";
import { renderInContext } from "utils/testHelpers";

describe("FooterContent container", () => {
  it("renders without crashing", () => {
    renderInContext(<FooterContent />);
  });
});
