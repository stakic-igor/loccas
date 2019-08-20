import { combineReducers } from "redux";

// Import all reducers
import locationsReducer from "./locations/reducer";
import popupReducer from "./popup/reducer";
import monitoringPointReducer from "./monitoringPoint/reducer";
import legendReducer from "./legend/reducer";
import waterLevelChartReducer from "./waterlevelchart/reducer";
import localeReducer from "./localization/reducer";

const rootReducer = combineReducers({
    // combine reducer here
    locations: locationsReducer,
    popup: popupReducer,
    monitoringPoint: monitoringPointReducer,
    legend: legendReducer,
    waterLevelChart: waterLevelChartReducer,
    locale: localeReducer
});

export default rootReducer;
