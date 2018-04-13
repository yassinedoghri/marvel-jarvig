import {RESET_SIDEBARS, TOGGLE_SIDEBAR} from "../constants/actionTypes";

const initSidebars = {
    settings: false,
    help: false,
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
        default:
            return state
    }
};
