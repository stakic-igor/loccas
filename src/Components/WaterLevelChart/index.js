import { connect } from "react-redux";

// * Actions
import getWaterLevels from "../../store/waterlevelchart/actionCreator";

// * Connected Component
import WaterLevelChart from "./WaterLevelChart";

const mapStateToProps = state => {
    const { waterLevel } = state.waterLevelChart;
    const { groundSurface } = state.waterLevelChart;

    return {
        waterLevel: waterLevel,
        groundSurface: groundSurface
    };
};

const mapDispatchToProps = dispatch => ({
    getWaterLevels: () => dispatch(getWaterLevels())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaterLevelChart);
