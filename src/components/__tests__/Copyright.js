import React from "react";
import { renderWithTheme } from "testHelpers";
import { Copyright } from "components";

describe("Copyright", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Copyright />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
