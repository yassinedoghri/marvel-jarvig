import {RESET_SIDEBARS, TOGGLE_SIDEBAR} from "../constants/actionTypes";

export const toggleSidebar = (sidebar) => ({
    type: TOGGLE_SIDEBAR,
    payload: {
        sidebar: sidebar,
    }
});

export const resetSidebars = () => ({
    type: RESET_SIDEBARS,
});
