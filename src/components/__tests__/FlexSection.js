import React from "react";
import renderWithTheme from "testHelpers";
import { FlexSection } from "components";

describe("FlexSection", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<FlexSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
