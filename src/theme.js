import { rgba, lighten, darken } from 'polished';

const primary = "#ED1D24";
const accent = "#fbca03";
const accent2 = "#67c7eb";
const def = "#ccc";
const foreground = "#222";
const background = "#f8f8f8";

const darkContrast = "#fff";
const lightContrast = "#222";


const theme = {
    colors: {
        primary: {
            base: primary,
            light: lighten(0.2, primary),
            dark: darken(0.2, primary),
        },
        accent: {
            base: accent,
            light: lighten(0.2, accent),
            dark: darken(0.2, accent),
        },
        accent2: {
            base: accent2,
            light: lighten(0.2, accent2),
            dark: darken(0.2, accent2),
        },
        def: {
            base: def,
            light: lighten(0.2, def),
            dark: darken(0.2, def),
        },
        foreground: {
            base: foreground,
            light: lighten(0.2, foreground),
            dark: darken(0.2, foreground),
        },
        background: {
            base: background,
            light: lighten(0.2, background),
            dark: darken(0.2, background),
        },
        dark: {
            primary: rgba(darkContrast, 1),
            secondary: rgba(darkContrast, .70),
            disabled: rgba(darkContrast, .5),
            hint: rgba(darkContrast, .12),
        },
        light: {
            primary: rgba(lightContrast, .87),
            secondary: rgba(lightContrast, .54),
            disabled: rgba(lightContrast, .38),
            hint: rgba(lightContrast, .12)
        }
    },
    fontSize: {
        xl: "2.4rem",
        lg: "1.8rem",
        md: "1.3rem",
        nm: "1rem",
        sm: "0.75rem",
    }
};

export default theme;
