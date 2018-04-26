import React from "react";
import { renderWithTheme } from "testHelpers";
import Caption from "components/Character/Caption";

describe("Character Caption", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Caption>Iron Man</Caption>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds the checked modifier", () => {
    const tree = renderWithTheme(<Caption checked>Iron Man</Caption>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
