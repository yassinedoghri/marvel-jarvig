export function getColor(theme, color = "", tint = "") {
  let colorSet = color === "" ? "default" : color; // default color
  let tintSet = tint === "" ? "base" : tint; // default tint for base colors
  if (color.startsWith("contrast")) {
    colorSet = color;
    tintSet = tint === "" ? "primary" : tint;
  }
  return theme.colors[colorSet][tintSet];
}

export function setFontSize(theme, size = "md") {
  return `
    font-size: ${theme.fontSize[size]}rem;
  `;
}

export function getResultColor(theme, result) {
  switch (result) {
    case "correct":
      return theme.colors.accent2.base;
    case "incorrect":
      return theme.colors.primary.base;
    default:
      return theme.colors.foreground.base;
  }
}
