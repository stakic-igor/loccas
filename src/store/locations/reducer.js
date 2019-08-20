import actionTypes from "./actionTypes";

const initialState = {
    locations: null,
    locationsError: false,
    locationsSuccess: false,
    locationLoading: false,
    activeLoc: [],
    passiveLoc: []
};

function getLocationLoading(state, action) {
    return {
        ...state,
        locationLoading: action.payload
    };
}

function getLocationsError(state, action) {
    return {
        ...state,
        locationsError: action.payload
    };
}
function getLocationSuccess(state, action) {
    console.log(state);
    return {
        ...state,
        locationsSuccess: true,
        locations: action.payload
    };
}

const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LOCATIONS_ERROR:
            return getLocationsError(state, action);

        case actionTypes.GET_LOCATIONS_LOADING:
            return getLocationLoading(state, action);

        case actionTypes.GET_LOCATIONS_SUCCESS:
            return getLocationSuccess(state, action);

        default:
            return state;
    }
};

export default locationsReducer;
