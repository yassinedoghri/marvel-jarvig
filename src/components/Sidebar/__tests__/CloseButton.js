import CloseButton from "components/Sidebar/CloseButton";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Sidebar Close Button", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<CloseButton>X</CloseButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
