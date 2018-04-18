import {RESET_SIDEBARS, TOGGLE_HINT, TOGGLE_SIDEBAR} from "../constants/actionTypes";

const initSidebars = {
    settings: false,
    help: false,
    isHintOpen: false,
};

export default (state = {
    sidebars: initSidebars,
}, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebars: {
                    ...initSidebars,
                    [action.payload.sidebar]: !state.sidebars[action.payload.sidebar]
                }
            };
        case RESET_SIDEBARS:
            return {
                ...state,
                sidebars: {
                    ...initSidebars
                }
            };
        case TOGGLE_HINT:
            return {
                ...state,
                isHintOpen: !state.isHintOpen,
            };
        default:
            return state
    }
};
