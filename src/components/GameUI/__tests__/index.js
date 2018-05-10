import GameUI from "components/GameUI";
import React from "react";
import { renderWithTheme } from "utils/testHelpers";

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
