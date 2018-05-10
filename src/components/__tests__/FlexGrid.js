import { FlexGrid } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("FlexGrid", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<FlexGrid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
