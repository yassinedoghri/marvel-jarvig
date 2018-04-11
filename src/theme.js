import { rgba } from 'polished';

const theme = {
    colors: {
        primary: {
            base: "#ED1D24",
            light: "#ED1D24",
            dark: "#ED1D24"
        },
        accent: {
            base: "#fbca03",
            light: "#fde480",
            dark: "#7d6501"
        },
        accent2: {
            base: "#67c7eb",
            light: "#b2e3f5",
            dark: "#137195"
        },
        foreground: {
            base: "#222",
            light: "#909090",
            dark: "#111"
        },
        background: {
            base: "#f8f8f8",
            light: "#fff",
            dark: "#7c7c7c"
        },
        dark: {
            primary: rgba("#fff", 1),
            secondary: rgba("#fff", .70),
            disabled: rgba("#fff", .5),
            hint: rgba("#fff", .12),
        },
        light: {
            primary: rgba("#000", .87),
            secondary: rgba("#000", .54),
            disabled: rgba("#000", .38),
            hint: rgba("#000", .12)
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
