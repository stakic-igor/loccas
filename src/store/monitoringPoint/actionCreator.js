import actionTypes from "./actionTypes";

function visibleMonitoringPoint(bool) {
    return {
        type: actionTypes.VISIBLE_MONITORING_INFO,
        payload: bool
    };
}

function toggleMonitoringPoint(bool) {
    return {
        type: actionTypes.TOGGLE_MONITORING_POINT,
        payload: bool
    };
}

function monitoringPointInfo(item) {
    return {
        type: actionTypes.MONITORING_POINT_INFO,
        payload: item
    };
}

function monitoringPointName(name) {
    return {
        type: actionTypes.MONITORING_POINT_NAME,
        payload: name
    };
}

export {
    toggleMonitoringPoint as default,
    monitoringPointInfo,
    visibleMonitoringPoint,
    monitoringPointName
};
