import { darken, lighten, rgba } from "polished";

const primary = "#ed1d24";
const accent = "#fbca03";
const accent2 = "#67c7eb";
const def = "#ccc";
const foreground = "#222";
const background = "#f8f8f8";

const darkContrast = "#fff";
const lightContrast = "#222";

const spaces = {
  xs: 0.25,
  sm: 0.5,
  md: 1,
  lg: 2,
  xl: 4
};

const fontSize = {
  xs: 0.75,
  sm: 0.875,
  md: 1,
  lg: 1.3,
  xl: 1.8
};

const theme = {
  colors: {
    primary: {
      base: primary,
      light: lighten(0.2, primary),
      dark: darken(0.2, primary)
    },
    accent: {
      base: accent,
      light: lighten(0.2, accent),
      dark: darken(0.2, accent)
    },
    accent2: {
      base: accent2,
      light: lighten(0.2, accent2),
      dark: darken(0.2, accent2)
    },
    default: {
      base: def,
      light: lighten(0.2, def),
      dark: darken(0.2, def)
    },
    foreground: {
      base: foreground,
      light: lighten(0.2, foreground),
      dark: darken(0.2, foreground)
    },
    background: {
      base: background,
      light: lighten(0.2, background),
      dark: darken(0.2, background)
    },
    contrastDark: {
      primary: rgba(darkContrast, 1),
      secondary: rgba(darkContrast, 0.7),
      disabled: rgba(darkContrast, 0.5),
      hint: rgba(darkContrast, 0.12)
    },
    contrastLight: {
      primary: rgba(lightContrast, 0.87),
      secondary: rgba(lightContrast, 0.54),
      disabled: rgba(lightContrast, 0.38),
      hint: rgba(lightContrast, 0.12)
    }
  },
  fontSize,
  spaces
};

export default theme;
