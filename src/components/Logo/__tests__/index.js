import Logo from "components/Logo";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { renderWithTheme } from "utils/testHelpers";

describe("Logo Block", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      <MemoryRouter>
        <Logo to="/">
          <Logo.MarvelLogo />
          <Logo.JarvigText />
        </Logo>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
