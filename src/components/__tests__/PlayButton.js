import { PlayButton } from "components";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { renderWithTheme } from "utils/testHelpers";

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
