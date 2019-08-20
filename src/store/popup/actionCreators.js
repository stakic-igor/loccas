import actionTypes from "./actionTypes";

function togglePopup(bool) {
    return {
        type: actionTypes.TOGGLE_POPUP,
        payload: bool
    };
}

export { togglePopup as default };
