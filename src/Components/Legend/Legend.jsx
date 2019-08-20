import React, { Component } from "react";
import ActivePin from "../../img/icons/icons_pin_active.svg";
import PassivePin from "../../img/icons/icons_pin_passive.svg";
import ArrowRight from "../../img/icons/icons_right.svg";
import ArrowLeft from "../../img/icons/icons_left.svg";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class Legend extends Component {
    openLegend = () => {
        this.props.toggleLegend(!this.props.isOpen);
    };

    render() {
        return (
            <div
                className={`legend info ${
                    this.props.isOpen ? "legend--active" : ""
                }`}
            >
                <div className="drawer">
                    <div className="drawer__handle" onClick={this.openLegend}>
                        <img
                            src={this.props.isOpen ? ArrowRight : ArrowLeft}
                            alt=""
                        />
                    </div>
                    {!this.props.isOpen && (
                        <div className="drawer__title">
                            <p>
                                <FormattedMessage
                                    id="legend"
                                    defaultMessage="Legend"
                                />
                            </p>
                        </div>
                    )}
                </div>
                {/* end drawer */}
                <div className="legend-body">
                    <div className="legend-body__title">
                        <p>
                            <FormattedMessage
                                id="legend"
                                defaultMessage="Legend"
                            />
                        </p>
                    </div>
                    {/* end legend body title */}
                    <div className="legend-body__form">
                        <form>
                            <div className="legend-body__form__group">
                                <label htmlFor="active-pin">
                                    <img src={ActivePin} alt="" />
                                    <FormattedMessage
                                        id="activePin"
                                        defaultMessage="Active Pin"
                                    />
                                </label>
                                <input
                                    type="checkbox"
                                    id="active-pin"
                                    defaultChecked={true}
                                />
                            </div>
                            <div className="legend-body__form__group">
                                <label htmlFor="passive-pin">
                                    <img src={PassivePin} alt="" />
                                    <span>
                                        <FormattedMessage
                                            id="passivePin"
                                            defaultMessage="Passive Pin"
                                        />
                                    </span>
                                </label>
                                <input
                                    type="checkbox"
                                    id="passive-pin"
                                    defaultChecked={true}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                {/* end legend body */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isOpen: state.legend.isOpen
});

export default connect(mapStateToProps)(Legend);
