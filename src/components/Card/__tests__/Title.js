import Title from "components/Card/Title";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Card Title", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
