import React from "react";
import renderWithTheme from "testHelpers";
import Figure from "components/Character/Figure";

describe("Character Figure", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Figure />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
