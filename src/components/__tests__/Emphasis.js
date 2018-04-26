import React from "react";
import { renderWithTheme } from "testHelpers";
import { Emphasis } from "components";

describe("Emphasis", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Emphasis />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
