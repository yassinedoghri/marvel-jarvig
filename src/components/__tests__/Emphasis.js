import { Emphasis } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Emphasis", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Emphasis />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
