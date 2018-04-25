import React from "react";
import renderWithTheme from "testHelpers";
import Toolbar from "components/Toolbar";

describe("Toolbar Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Toolbar>
        <Toolbar.Item>Item 1</Toolbar.Item>
        <Toolbar.Item>Item 2</Toolbar.Item>
      </Toolbar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
