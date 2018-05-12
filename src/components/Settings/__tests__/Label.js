import Label from "components/Settings/Label";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Settings Label", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Label>This is a test</Label>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
