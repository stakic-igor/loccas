import { connect } from "react-redux";

import toggleMonitoringPoint from "../../store/monitoringPoint/actionCreator";
import monitoringPointInfo from "../../store/monitoringPoint/actionCreator";
import monitoringPointName from "../../store/monitoringPoint/actionCreator";
// * Connected Component
import monitoringPoint from "./MonitoringPoint";

const mapStateToProps = state => {
    const { visible } = state.monitoringPoint;
    const { info } = state.monitoringPoint;
    const { monitoringPointData } = state.monitoringPoint;
    const { lang } = state.locale;
    return {
        mpVisible: visible,
        info: info,
        monitoringPointData: monitoringPointData,
        lang
    };
};

const mapDispatchToProps = dispatch => ({
    toggleMonitoringPoint: bool => dispatch(toggleMonitoringPoint(bool)),
    monitoringPointInfo: item => dispatch(monitoringPointInfo(item)),
    monitoringPointName: name => dispatch(monitoringPointName(name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(monitoringPoint);
