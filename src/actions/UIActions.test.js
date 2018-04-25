import {
  RESET_SIDEBARS,
  TOGGLE_HINT,
  TOGGLE_SIDEBAR
} from "constants/actionTypes";

import { toggleSidebar, toggleHint, resetSidebars } from "actions/UIActions";

describe("UI actions", () => {
  describe("toggleSidebar", () => {
    it("should return the correct constant", () => {
      const sidebar = true;
      const expectedAction = {
        type: TOGGLE_SIDEBAR,
        payload: sidebar
      };
      expect(toggleSidebar(true)).toEqual(expectedAction);
    });
  });
  describe("toggleHint", () => {
    it("should return the correct constant", () => {
      expect(toggleHint()).toEqual({
        type: TOGGLE_HINT
      });
    });
  });
  describe("resetSidebars", () => {
    it("should return the correct constant", () => {
      expect(resetSidebars()).toEqual({
        type: RESET_SIDEBARS
      });
    });
  });
});
