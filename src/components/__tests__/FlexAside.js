import React from "react";
import renderWithTheme from "testHelpers";
import { FlexAside } from "components";

describe("FlexAside", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<FlexAside />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
