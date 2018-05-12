import Label from "components/Character/Label";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Character Label", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
