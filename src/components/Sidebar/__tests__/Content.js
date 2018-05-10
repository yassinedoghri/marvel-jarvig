import Content from "components/Sidebar/Content";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Sidebar Content", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(<Content>Hello World!</Content>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
