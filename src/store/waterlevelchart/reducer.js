import actionTypes from "./actionTypes";

const initialState = {
    waterLevel: null,
    groundSurface: null,
    waterLevelError: null,
    waterLevelSuccess: false,
    waterLevelLoading: false
};

function getWaterLevelLoading(state, action) {
    return {
        ...state,
        waterLevelLoading: action.payload
    };
}

function getWaterLevelError(state, action) {
    return {
        ...state,
        waterLevelError: action.payload
    };
}

function getWaterLevelSuccess(state, action) {
    return {
        ...state,
        waterLevelSuccess: true,
        waterLevel: action.payload.waterLavelsVrd,
        groundSurface: action.payload.groundSurfaceDatas
    };
}

function getGroundWaterSuccess(state, action) {
    return {
        ...state,
        waterLevelSuccess: true,
        groundSurface: action.payload
    };
}

const waterLevelChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_WATER_LEVELS_ERROR:
            return getWaterLevelError(state, action);

        case actionTypes.GET_WATER_LEVELS_LOADING:
            return getWaterLevelLoading(state, action);

        case actionTypes.GET_WATER_LEVELS_SUCCESS:
            return getWaterLevelSuccess(state, action);

        case actionTypes.GET_GW:
            return getGroundWaterSuccess(state, action);

        default:
            return state;
    }
};

export default waterLevelChartReducer;
