import { connect } from "react-redux";

// * Actions
import togglePopup from "../../store/popup/actionCreators";

// * Connected Component
import InfoBtn from "./InfoBtn";

const mapStateToProps = state => {
    // const { visible } = state.popup;
    return {};
};

const mapDispatchToProps = dispatch => ({
    togglePopup: bool => dispatch(togglePopup(bool))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoBtn);
