import actionTypes from "./actionTypes";
const showPoup = localStorage.getItem("showPopup");
const storageSet = showPoup !== null;

const initialState = {
    visible: storageSet ? JSON.parse(showPoup) : true
};

function togglePopup(state, action) {
    // console.log("reducer", state); visible from initialState
    return {
        ...state,
        visible: action.payload
    };
}

const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_POPUP:
            return togglePopup(state, action);

        default:
            return state;
    }
};

export default popupReducer;
