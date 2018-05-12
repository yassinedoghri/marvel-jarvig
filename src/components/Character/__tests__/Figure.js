import Figure from "components/Character/Figure";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Character Figure", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Figure />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
