import {
  RESET_SIDEBARS,
  TOGGLE_HINT,
  TOGGLE_SIDEBAR
} from "constants/actionTypes";

import UIReducer, { initialState, initSidebars } from "reducers/reducer-ui";

describe("jarvig reducer", () => {
  it("should return the initial state", () => {
    expect(UIReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle TOGGLE_SIDEBAR", () => {
    expect(
      UIReducer(initialState, {
        type: TOGGLE_SIDEBAR,
        payload: "settings"
      })
    ).toEqual({
      ...initialState,
      sidebars: {
        ...initSidebars,
        settings: true
      }
    });
    expect(
      UIReducer(
        {
          ...initialState,
          sidebars: {
            ...initSidebars,
            settings: true
          }
        },
        {
          type: TOGGLE_SIDEBAR,
          payload: "settings"
        }
      )
    ).toEqual(initialState);
  });

  it("should handle RESET_SIDEBARS", () => {
    expect(
      UIReducer(initialState, {
        type: RESET_SIDEBARS
      })
    ).toEqual(initialState);

    expect(
      UIReducer(
        {
          ...initialState,
          sidebars: {
            ...initSidebars,
            help: true
          }
        },
        {
          type: RESET_SIDEBARS
        }
      )
    ).toEqual(initialState);
  });

  it("should handle TOGGLE_HINT", () => {
    expect(
      UIReducer(initialState, {
        type: TOGGLE_HINT
      })
    ).toEqual({
      ...initialState,
      isHintOpen: true
    });

    expect(
      UIReducer(
        {
          ...initialState,
          isHintOpen: true
        },
        {
          type: TOGGLE_HINT
        }
      )
    ).toEqual(initialState);
  });
});
