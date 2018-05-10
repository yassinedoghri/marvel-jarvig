import Sidebar from "components/Sidebar";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

describe("Sidebar Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <Sidebar>
        <Sidebar.Title>Sidebar Title</Sidebar.Title>
        <Sidebar.CloseButton>X</Sidebar.CloseButton>
        <Sidebar.Content>This is a Sidebar</Sidebar.Content>
      </Sidebar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds open modifier", () => {
    const tree = renderWithTheme(
      <Sidebar open>
        <Sidebar.Title>Sidebar Title</Sidebar.Title>
        <Sidebar.CloseButton>X</Sidebar.CloseButton>
        <Sidebar.Content>This is a Sidebar</Sidebar.Content>
      </Sidebar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
