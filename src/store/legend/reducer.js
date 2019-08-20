import actionTypes from "./actionTypes";

const inintalState = {
    isOpen: false
};

function toggleLegend(state, action) {
    return {
        ...state,
        isOpen: action.payload
    };
}

const legendReducer = (state = inintalState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_LEGEND:
            return toggleLegend(state, action);

        default:
            return state;
    }
};

export default legendReducer;
