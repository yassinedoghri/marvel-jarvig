import {
  RESET_SIDEBARS,
  TOGGLE_HINT,
  TOGGLE_SIDEBAR
} from "constants/actionTypes";

export const toggleSidebar = sidebar => ({
  type: TOGGLE_SIDEBAR,
  payload: sidebar
});

export const resetSidebars = () => ({
  type: RESET_SIDEBARS
});

export const toggleHint = () => ({
  type: TOGGLE_HINT
});
