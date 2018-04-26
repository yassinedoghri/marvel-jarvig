import React from "react";
import { renderInContext } from "testHelpers";
import CharactersGrid from "containers/PlayScreen/CharactersGrid";

describe("CharactersGrid container", () => {
  it("renders without crashing", () => {
    const game = {
      choices: [],
      selected: null,
      answer: null,
      result: [],
      remainingLives: 0,
      checked: false,
      over: false
    };
    renderInContext(
      <CharactersGrid
        game={game}
        selectCharacter={() => console.info("test")}
      />
    );
  });
});
