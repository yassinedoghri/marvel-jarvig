import { PlaySection } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("PlaySection", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<PlaySection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
