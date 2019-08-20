import actionTypes from "./actionTypes";
import { fetchLocations } from "../../api/locations";

function getLocationsLoading(bool) {
    return {
        type: actionTypes.GET_LOCATIONS_LOADING,
        payload: bool
    };
}

function getLocationsError(bool) {
    return {
        type: actionTypes.GET_LOCATIONS_ERROR,
        payload: bool
    };
}

function getLocationsSuccess(data) {
    return {
        type: actionTypes.GET_LOCATIONS_SUCCESS,
        payload: data
    };
}

function getLocations() {
    return dispatch => {
        dispatch(getLocationsLoading(true));
        fetchLocations()
            .then(response => {
                // console.log("res", response);
                dispatch(getLocationsSuccess(response));
                dispatch(getLocationsLoading(false));
            })
            .catch(() => dispatch(getLocationsError(true)));
    };
}

export {
    getLocations as default,
    getLocationsError,
    getLocationsLoading,
    getLocationsSuccess
};
