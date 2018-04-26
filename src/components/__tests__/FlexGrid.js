import React from "react";
import { renderWithTheme } from "testHelpers";
import { FlexGrid } from "components";

describe("FlexGrid", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<FlexGrid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
