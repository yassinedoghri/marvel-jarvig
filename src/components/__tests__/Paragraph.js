import { Paragraph } from "components";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Paragraph", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Paragraph />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
