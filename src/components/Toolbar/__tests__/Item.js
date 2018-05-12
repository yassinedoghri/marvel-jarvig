import Item from "components/Toolbar/Item";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Toolbar Item", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Item>Item</Item>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
