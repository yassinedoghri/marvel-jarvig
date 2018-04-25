import React from "react";
import renderWithTheme from "testHelpers";
import Item from "components/Toolbar/Item";

describe("Toolbar Item", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Item>Item</Item>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
