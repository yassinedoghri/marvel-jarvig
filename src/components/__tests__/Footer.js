import React from "react";
import { renderWithTheme } from "testHelpers";
import { Footer } from "components";

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
