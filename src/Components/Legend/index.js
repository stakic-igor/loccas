import { connect } from "react-redux";

import toggleLegend from "../../store/legend/actionCreator";

import Legend from "./Legend";

const mapStateToProps = state => {
    const { isOpen } = state.legend;
    const { lang } = state.locale;
    return {
        legendOpen: isOpen,
        lang
    };
};

const mapDispatchToProps = dispatch => ({
    toggleLegend: bool => dispatch(toggleLegend(bool))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Legend);
