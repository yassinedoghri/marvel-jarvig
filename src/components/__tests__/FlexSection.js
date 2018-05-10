import { FlexSection } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("FlexSection", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<FlexSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
