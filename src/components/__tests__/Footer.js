import { Footer } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
