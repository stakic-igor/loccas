import React from "react";
import logo from "../../img/VEI-logo-RGB.svg";

const Logo = () => {
    return (
        <div className="logo">
            <img
                src={logo}
                className="logo__img"
                alt="vanEssen instruments logo"
            />
        </div>
    );
};

export default Logo;
