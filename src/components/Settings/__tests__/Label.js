import React from "react";
import { renderWithTheme } from "testHelpers";
import Label from "components/Settings/Label";

describe("Settings Label", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Label>This is a test</Label>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
