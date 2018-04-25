import React from "react";
import renderWithTheme from "testHelpers";
import { Paragraph } from "components";

describe("Paragraph", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Paragraph />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
