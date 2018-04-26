import React from "react";
import { renderWithTheme } from "testHelpers";
import { Header } from "components";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
