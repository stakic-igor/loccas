import { connect } from "react-redux";

// * Actions
import getLocations from "../../store/locations/actionCreators";
import getWaterLevels from "../../store/waterlevelchart/actionCreator";
import toggleMonitoringPoint, {
    monitoringPointInfo,
    visibleMonitoringPoint,
    monitoringPointName
} from "../../store/monitoringPoint/actionCreator";

// * Connected Component
import Map from "./Map";

const mapStateToProps = state => {
    const { locations } = state.locations;
    const { monitoringPointData } = state.monitoringPoint;
    const { active } = state.monitoringPoint;
    const { waterLevel } = state.waterLevelChart;
    const { groundSurface } = state.waterLevelChart;
    const { lang } = state.locale;

    return {
        locations,
        monitoringPointData,
        active,
        waterLevel,
        groundSurface,
        lang
    };
};

const mapDispatchToProps = dispatch => ({
    getLocations: () => dispatch(getLocations()),
    getWaterLevels: (mp, sl) => dispatch(getWaterLevels(mp, sl)),
    visibleMonitoringPoint: bool => dispatch(visibleMonitoringPoint(bool)),
    toggleMonitoringPoint: bool => dispatch(toggleMonitoringPoint(bool)),
    monitoringPointInfo: item => dispatch(monitoringPointInfo(item)),
    monitoringPointName: name => dispatch(monitoringPointName(name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
