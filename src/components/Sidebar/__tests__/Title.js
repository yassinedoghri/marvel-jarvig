import Title from "components/Sidebar/Title";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Sidebar Title", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Title>Sidebar Title</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
