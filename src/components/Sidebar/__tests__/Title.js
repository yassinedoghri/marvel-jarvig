import React from "react";
import { renderWithTheme } from "testHelpers";
import Title from "components/Sidebar/Title";

describe("Sidebar Title", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Title>Sidebar Title</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
