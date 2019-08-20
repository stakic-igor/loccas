import actionTypes from "./actionTypes";
import { fetchWaterLevels } from "../../api/waterLevels";

function getWaterLevelLoading(bool) {
    return {
        type: actionTypes.GET_WATER_LEVELS_LOADING,
        payload: bool
    };
}

function getWaterLevelError(bool) {
    return {
        type: actionTypes.GET_WATER_LEVELS_ERROR,
        payload: bool
    };
}

function getWaterLevelSuccess(data) {
    return {
        type: actionTypes.GET_WATER_LEVELS_SUCCESS,
        payload: data
    };
}

function getGroundWaterSuccess(data) {
    return {
        type: actionTypes.GET_GW,
        payload: data
    };
}

function getWaterLevels(mp, sl) {
    return dispatch => {
        dispatch(getWaterLevelLoading(true));
        fetchWaterLevels(mp, sl)
            .then(response => {
                dispatch(
                    getWaterLevelSuccess({
                        waterLavelsVrd: response.waterLavelsVrd,
                        groundSurfaceDatas: response.groundSurfaceDatas
                    })
                );
                //dispatch(getGroundWaterSuccess(response.groundSurfaceDatas));
                dispatch(getWaterLevelLoading(false));
            })
            .catch(() => dispatch(getWaterLevelError(true)));
    };
}

export {
    getWaterLevels as default,
    getWaterLevelLoading,
    getWaterLevelSuccess,
    getWaterLevelError,
    getGroundWaterSuccess
};
