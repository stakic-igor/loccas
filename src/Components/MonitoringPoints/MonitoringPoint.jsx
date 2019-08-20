import React, { Component } from "react";
import ArrowRight from "../../img/icons/icons_right.svg";
import ArrowLeft from "../../img/icons/icons_left.svg";
import { connect } from "react-redux";
import WaterLevelChart from "../WaterLevelChart";

import { FormattedMessage } from "react-intl";

import SimpleBar from "simplebar-react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import "simplebar/dist/simplebar.min.css";

class MonitoringPoint extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.info !== prevProps.info) {
            //console.log("com will update", this.props.info);
        }
        if (this.props.monitoringPointData !== prevProps.monitoringPointData) {
            //console.log("com will update", this.props.info);
        }
    }

    openLegend = () => {
        this.props.toggleMonitoringPoint(!this.props.active);
    };

    render() {
        return (
            <div
                className={`legend monitoring-points ${
                    this.props.active ? "legend--active" : ""
                }`}
            >
                <div className="drawer">
                    <div className="drawer__handle" onClick={this.openLegend}>
                        <img
                            src={this.props.active ? ArrowRight : ArrowLeft}
                            alt=""
                        />
                    </div>
                    {this.props.active ? null : (
                        <div className="drawer__title">
                            <p>
                                <FormattedMessage
                                    id="monitoringPointAll"
                                    defaultMessage="Monitoring points/water level"
                                />
                            </p>
                        </div>
                    )}
                </div>
                {/* end drawer */}
                <div className="legend-body legend-body--mp">
                    <div className="monitoring-points__water-lvl">
                        <div className="legend-body__title">
                            <p>
                                <FormattedMessage
                                    id="waterLvl"
                                    defaultMessage="Water level"
                                />
                            </p>
                        </div>

                        <WaterLevelChart />
                    </div>
                    <SimpleBar className="monitoring-points__mp">
                        <div className="legend-body__title">
                            <p>
                                <FormattedMessage
                                    id="monitoringPoint"
                                    defaultMessage="Monitoring Points"
                                />
                            </p>
                        </div>
                        <div className="monitoring-points__mp__name">
                            <div className="label">
                                <FormattedMessage
                                    id="mpName"
                                    defaultMessage="Name"
                                />
                            </div>
                            <div className="value">
                                {this.props.monitoringPointData.name &&
                                    this.props.monitoringPointData.name}
                            </div>
                        </div>

                        <Accordion
                            allowMultipleExpanded={true}
                            allowZeroExpanded={true}
                            preExpanded={["1", "2", "3"]}
                        >
                            <AccordionItem uuid={"1"}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <FormattedMessage
                                            id="mpInformation"
                                            defaultMessage="Information"
                                        />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="informations">
                                        <div className="informations-item">
                                            <div className="label">
                                                <FormattedMessage
                                                    id="mpCoordinates"
                                                    defaultMessage="Coordinates"
                                                />
                                            </div>
                                            <div className="value">
                                                {this.props.info.lat &&
                                                    this.props.info.lat}{" "}
                                                x{" "}
                                                {this.props.info.lng &&
                                                    this.props.info.lng}
                                            </div>
                                        </div>
                                        <div className="informations-item">
                                            <div className="label">
                                                <FormattedMessage
                                                    id="mpStatus"
                                                    defaultMessage="Status"
                                                />
                                            </div>
                                            <div className="value">
                                                {this.props.info.isActive &&
                                                    this.props.info.isActive}
                                            </div>
                                        </div>
                                        <div className="informations-item">
                                            <div className="label">
                                                <FormattedMessage
                                                    id="mpPurpose"
                                                    defaultMessage="Purpose"
                                                />
                                            </div>
                                            <div className="value">
                                                {this.props.info.purpose &&
                                                    this.props.info.purpose}
                                            </div>
                                        </div>
                                        <div className="informations-item">
                                            <div className="label">
                                                <FormattedMessage
                                                    id="mpAddress"
                                                    defaultMessage="Address"
                                                />
                                            </div>
                                            <div className="value">
                                                {this.props.info.address &&
                                                    this.props.info.address}
                                                ,{" "}
                                                {this.props.info.city &&
                                                    this.props.info.city}
                                            </div>
                                        </div>
                                        <div className="informations-item">
                                            <div className="label">
                                                <FormattedMessage
                                                    id="mpDrillingDepth"
                                                    defaultMessage="Dilling Depth"
                                                />
                                            </div>
                                            <div className="value">
                                                {this.props.info
                                                    .drillingDepth &&
                                                    this.props.info
                                                        .drillingDepth}
                                            </div>
                                        </div>
                                        <div className="informations-item">
                                            <div className="label">
                                                <FormattedMessage
                                                    id="mpInstallationDate"
                                                    defaultMessage="Installation Date"
                                                />
                                            </div>
                                            <div className="value">
                                                {this.props.info
                                                    .installationDate &&
                                                    this.props.info
                                                        .installationDate}
                                            </div>
                                        </div>
                                        <div className="informations-item">
                                            <div className="label">
                                                <FormattedMessage
                                                    id="mpOwner"
                                                    defaultMessage="Owner"
                                                />
                                            </div>
                                            <div className="value">
                                                {this.props.info.owner &&
                                                    this.props.info.owner}
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid={"2"}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <FormattedMessage
                                            id="mpPhoto"
                                            defaultMessage="Photo"
                                        />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <img
                                        src="https://via.placeholder.com/150"
                                        alt="place"
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid={"3"}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <FormattedMessage
                                            id="mpBoreHoleProfile"
                                            defaultMessage="Borehole Profile"
                                        />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <img
                                        src="https://via.placeholder.com/300"
                                        alt="place"
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </SimpleBar>
                    {/* end legend body title */}
                    <div className="legend-body__form" />
                </div>
                {/* end legend body */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    active: state.monitoringPoint.active
});

export default connect(mapStateToProps)(MonitoringPoint);
