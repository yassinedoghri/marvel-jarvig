import React from "react";
import { renderWithTheme } from "testHelpers";
import Title from "components/Card/Title";

describe("Card Title", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
