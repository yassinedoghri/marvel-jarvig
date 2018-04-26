import React from "react";
import { renderWithTheme } from "testHelpers";
import { MemoryRouter } from "react-router-dom";
import { PlayButton } from "components";

describe("PlayButton", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <MemoryRouter>
        <PlayButton to="/" />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
