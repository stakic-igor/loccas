import React from "react";
import info from "../../img/icons/icons_info.svg";

const InfoBtn = ({ popupVisible, togglePopup }) => (
    <div onClick={() => togglePopup(true)} className="info-btn">
        <img src={info} alt="" />
    </div>
);

export default InfoBtn;
