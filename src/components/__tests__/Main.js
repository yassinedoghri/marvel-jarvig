import { Main } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Main", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
