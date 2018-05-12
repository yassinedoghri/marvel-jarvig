import JarvigText from "components/Logo/JarvigText";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Logo Jarvig Text", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<JarvigText />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds the size and spacing modifiers", () => {
    const tree = renderWithTheme(<JarvigText sm spaceLeft />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
