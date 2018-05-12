import { Loader } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Loader", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
