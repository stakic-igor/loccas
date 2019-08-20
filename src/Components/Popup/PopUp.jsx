import React from "react";
import SimpleBar from "simplebar-react";

import logo from "../../img/VEI-logo-RGB.svg";
import close from "../../img/icons/icons_close.svg";

import "simplebar/dist/simplebar.min.css";
import { FormattedMessage } from "react-intl";

const PopUp = ({ popupVisible, togglePopup, setLanguage }) => {
    const closePopup = () => {
        localStorage.setItem("showPopup", "false");

        togglePopup(false);
    };

    const chooseLang = lang => {
        localStorage.setItem("lang", lang);
        setLanguage(lang);
    };

    return (
        <div className="popup">
            <div className="popup-main">
                <div className="popup-main-header">
                    <div className="popup-main-header__logo">
                        <img
                            src={logo}
                            alt=""
                            className="popup-main-header__logo__image"
                        />
                    </div>
                    {/* end popup-main-header__logo */}
                    <img
                        src={close}
                        alt=""
                        onClick={closePopup}
                        className="popup-main-header__logo__close"
                    />
                </div>
                {/* end popup-main-header */}
                <SimpleBar className="popup-main-body-wrapper">
                    <div className="popup-main-body">
                        <div className="popup-main-body__item">
                            <FormattedMessage
                                id="chooseLang"
                                defaultMessage="Choose Language"
                            />
                            <p onClick={() => chooseLang("en")}>En</p>{" "}
                            <p onClick={() => chooseLang("nl")}>Nl</p>
                        </div>
                        <div className="popup-main-body__item">
                            <h3>
                                <FormattedMessage
                                    id="welcome"
                                    defaultMessage="Welcome to the Van Essen Instruments open data
                                    portal"
                                />
                            </h3>
                            <p>
                                <FormattedMessage
                                    id="welcomeMsg"
                                    defaultMessage="On this website you can view public water level
                                    data of Van Essen Instruments. Every marker on
                                    the map corresponds with a monitoring point. All
                                    data is also available through an API."
                                />
                            </p>
                        </div>
                        <div className="popup-main-body__item">
                            <h3>
                                <FormattedMessage
                                    id="license"
                                    defaultMessage="License"
                                />
                            </h3>
                            <p>
                                <FormattedMessage
                                    id="licenseMsg"
                                    defaultMessage="All data is available under the xxx license."
                                />
                            </p>
                        </div>
                        <div className="popup-main-body__item">
                            <h3>
                                <FormattedMessage
                                    id="about"
                                    defaultMessage="About Van Essen Instruments"
                                />
                            </h3>
                            <p>
                                <FormattedMessage
                                    id="aboutMsg"
                                    defaultMessage="1 Van Essen Instruments designs, manufactures,
                                    and distributes groundwater monitoring products,
                                    systems and services. From groundwater
                                    management to aquifer characterization, Van
                                    Essen Instruments products provide accurate
                                    results and reliable operation that deliver
                                    actionable information for business and
                                    government. Visit the Van Essen Instruments
                                    website to learn more about our products and
                                    services."
                                />
                            </p>
                        </div>
                    </div>
                    {/* end popup-main-body */}
                </SimpleBar>
            </div>
            {/* end popup-main */}
        </div> /* end popup */
    );
};

export default PopUp;
