import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import theme from "theme";
import { ThemeProvider } from "styled-components";

export default function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
}
