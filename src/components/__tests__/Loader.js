import React from "react";
import renderWithTheme from "testHelpers";
import { Loader } from "components";

describe("Loader", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
