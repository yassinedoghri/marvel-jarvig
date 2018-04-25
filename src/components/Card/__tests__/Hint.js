import React from "react";
import renderWithTheme from "testHelpers";
import Hint from "components/Card/Hint";

describe("Card Hint", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Hint />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
