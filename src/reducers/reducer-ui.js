import {
  RESET_SIDEBARS,
  TOGGLE_HINT,
  TOGGLE_SIDEBAR
} from "constants/actionTypes";

export const initSidebars = {
  settings: false,
  help: false
};

export const initialState = {
  sidebars: initSidebars,
  isHintOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        sidebars: {
          ...initSidebars,
          [action.payload]: !state.sidebars[action.payload]
        }
      };
    }
    case RESET_SIDEBARS: {
      return {
        ...state,
        sidebars: {
          ...initSidebars
        }
      };
    }
    case TOGGLE_HINT: {
      return {
        ...state,
        isHintOpen: !state.isHintOpen
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
