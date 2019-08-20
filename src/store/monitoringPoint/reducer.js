import actionTypes from "./actionTypes";

const initialState = {
    visible: false,
    active: false,
    info: [],
    monitoringPointData: []
};

function visibleMonitoringPoint(state, action) {
    return {
        ...state,
        visible: action.payload
    };
}

function toggleMonitoringPoint(state, action) {
    return {
        ...state,
        active: action.payload
    };
}

function monitoringPointInfo(state, action) {
    return {
        ...state,
        info: action.payload
    };
}

function monitoringPointName(state, action) {
    return {
        ...state,
        monitoringPointData: action.payload
    };
}

const monitoringPointReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MONITORING_POINT:
            return toggleMonitoringPoint(state, action);

        case actionTypes.MONITORING_POINT_INFO:
            return monitoringPointInfo(state, action);

        case actionTypes.VISIBLE_MONITORING_INFO:
            return visibleMonitoringPoint(state, action);

        case actionTypes.MONITORING_POINT_NAME:
            return monitoringPointName(state, action);

        default:
            return state;
    }
};

export default monitoringPointReducer;
