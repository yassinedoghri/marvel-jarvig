import { Button } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds backgroundcolor modifier", () => {
    const tree = renderWithTheme(<Button backgroundcolor="accent" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds color modifier", () => {
    const tree = renderWithTheme(<Button color="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
