import React from "react";
import { renderWithTheme } from "testHelpers";
import { HR } from "components";

describe("HR", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<HR />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
