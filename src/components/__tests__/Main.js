import React from "react";
import renderWithTheme from "testHelpers";
import { Main } from "components";

describe("Main", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
