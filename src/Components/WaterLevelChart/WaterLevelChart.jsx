import React, { Component } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import logo from "../../img/VEI-logo-RGB.svg";

class WaterLevelChart extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.waterLevel !== prevProps.waterLevel) {
            let vrd = this.props.waterLevel.map(item => {
                return item.vrd;
            });

            let elevation = this.props.groundSurface.map(item => {
                return item.elevation;
            });

            this.setState({
                chartData: {
                    labels: [],
                    datasets: [
                        {
                            label: "water level MSL",
                            data: vrd,
                            borderColor: "blue",
                            fill: false
                        },
                        {
                            label: "ground surface",
                            data: elevation,
                            borderColor: "black",
                            fill: false
                        }
                    ]
                }
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    // "Boston",
                    // "Worcester",
                    // "Springfield",
                    // "Lowell",
                    "Cambridge",
                    "New Bedford"
                ],
                datasets: [
                    {
                        label: "water level MSL",
                        data: [],
                        borderColor: "blue",
                        fill: false
                    },
                    {
                        label: "ground surface",
                        data: [],
                        borderColor: "black",
                        fill: false
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div className="legend-body__chart">
                {this.props.groundSurface ? (
                    <Line
                        data={this.state.chartData}
                        options={{
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                        }}
                        // width={100}
                        // height={50}
                        options={{ maintainAspectRatio: false }}
                    />
                ) : (
                    <div className="legend-body__chart__loader">
                        <img src={logo} alt="vanEssen instruments logo" />
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    waterLevel: state.waterLevelChart.waterLevel,
    groundSurface: state.waterLevelChart.groundSurface
});

export default connect(mapStateToProps)(WaterLevelChart);
