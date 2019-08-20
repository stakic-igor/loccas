import actionTypes from "./actionTypes";

const getLang = localStorage.getItem("lang");
const storageSet = getLang !== null;

const initialState = {
    lang: "en",
    favLang: storageSet ? getLang : "en"
};

function setLanguage(state, action) {
    return {
        ...state,
        lang: action.payload
    };
}

const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCAL:
            return setLanguage(state, action);

        default:
            return state;
    }
};

export default localeReducer;
