import React from "react";
import renderWithTheme from "testHelpers";
import Item from "components/GameUI/Item";

describe("GameUI Item", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Item />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
