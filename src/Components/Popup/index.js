import { connect } from "react-redux";

// * Actions
import togglePopup from "../../store/popup/actionCreators";
import setLanguage from "../../store/localization/actionCreator";
// * Connected Component
import PopUp from "./PopUp";

const mapStateToProps = state => {
    const { visible } = state.popup;
    const { lang } = state.locale;
    return {
        popupVisible: visible,
        lang
    };
};

const mapDispatchToProps = dispatch => ({
    togglePopup: bool => dispatch(togglePopup(bool)),
    setLanguage: lang => dispatch(setLanguage(lang))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopUp);
