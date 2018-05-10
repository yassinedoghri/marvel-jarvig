import Toolbar from "components/Toolbar";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

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
