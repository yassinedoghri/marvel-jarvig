import React from "react";
import { renderWithTheme } from "testHelpers";
import { MemoryRouter } from "react-router-dom";
import Logo from "components/Logo";

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
