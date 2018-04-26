import React from "react";
import { renderWithTheme } from "testHelpers";
import GameUI from "components/GameUI";

describe("GameUI Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <GameUI>
        <GameUI.Item>
          <GameUI.Icon>Icon</GameUI.Icon>
          <GameUI.Label>GameUI Label</GameUI.Label>
        </GameUI.Item>
      </GameUI>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
