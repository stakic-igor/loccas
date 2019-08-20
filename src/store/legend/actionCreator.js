import actionTypes from "./actionTypes";

function toggleLegend(bool) {
    return {
        type: actionTypes.TOGGLE_LEGEND,
        payload: bool
    };
}

export { toggleLegend as default };
