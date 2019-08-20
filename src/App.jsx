import React from "react";
import Logo from "./Components/Logo";
import Legend from "./Components/Legend";
import MonitoringPoint from "./Components/MonitoringPoints";
import InfoBtn from "./Components/Button";
import PopUp from "./Components/Popup";
import Map from "./Components/Map/index";
import { CookieBanner } from "@palmabit/react-cookie-law";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import "./style.scss";
import messages from "./messages";

const App = ({ showPopup, showMonitoringPoint, lang, favLang }) => (
    <IntlProvider locale={lang} messages={messages[lang]}>
        <React.Fragment>
            <CookieBanner
                message="This website uses cookies to give you the very best experience. By continuing to browse this website you are agreeing to our use of cookies, please review our privacy policy."
                acceptButtonText="Accept and close"
                policyLink="https://www.vanessen.com/company/privacy"
                showMarketingOption={false}
                showStatisticsOption={false}
                showPreferencesOption={false}
                styles={{
                    button: {
                        backgroundColor: "#0357a3",
                        color: "#fff",
                        border: "0",
                        padding: ".525rem 1.25rem",
                        cursor: "pointer"
                    },
                    dialog: {
                        position: "fixed",
                        left: "0",
                        bottom: "0",
                        width: "100%",
                        background: "#fff",
                        padding: ".525rem 1.25rem",
                        boxSizing: "border-box",
                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                        zIndex: "9500"
                    },
                    optionWrapper: {
                        display: "none"
                    }
                }}
            />
            <div style={{ width: "100vw", height: "100vh" }}>
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAym6IEdcNZx97-URqG16gFhMO4GxzNP3g`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
            {showPopup && <PopUp />}
            <Logo />
            <InfoBtn />
            {showMonitoringPoint && <MonitoringPoint />}
            <Legend />
        </React.Fragment>
    </IntlProvider>
);

const mapStateToProps = state => ({
    showPopup: state.popup.visible,
    showMonitoringPoint: state.monitoringPoint.visible,
    lang: state.locale.lang,
    favLang: state.locale.favLang
});

export default connect(mapStateToProps)(App);
