import React from "react";
import renderWithTheme from "testHelpers";
import MarvelLogo from "components/Logo/MarvelLogo";

describe("Logo Marvel", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<MarvelLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("adds the size modifier", () => {
    const tree = renderWithTheme(<MarvelLogo sm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
