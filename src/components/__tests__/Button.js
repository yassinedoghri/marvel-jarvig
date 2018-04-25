import React from "react";
import renderWithTheme from "testHelpers";
import { Button } from "components";

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds primary modifier", () => {
    const tree = renderWithTheme(<Button primary />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds accent modifier", () => {
    const tree = renderWithTheme(<Button accent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds accent2 modifier", () => {
    const tree = renderWithTheme(<Button accent2 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
