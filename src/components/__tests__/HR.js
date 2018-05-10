import { HR } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("HR", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<HR />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
