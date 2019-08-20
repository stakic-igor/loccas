import actionTypes from "./actionTypes";

function setLanguage(lang) {
    return {
        type: actionTypes.SET_LOCAL,
        payload: lang
    };
}

export default setLanguage;
