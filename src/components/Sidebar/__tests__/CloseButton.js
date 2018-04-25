import React from "react";
import renderWithTheme from "testHelpers";
import CloseButton from "components/Sidebar/CloseButton";

describe("Sidebar Close Button", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<CloseButton>X</CloseButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
