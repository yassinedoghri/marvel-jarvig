import { Header } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
