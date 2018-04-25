import React from "react";
import renderWithTheme from "testHelpers";
import HintMessage from "components/Card/HintMessage";

describe("Card Hint Message", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<HintMessage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
