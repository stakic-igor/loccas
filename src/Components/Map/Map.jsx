import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import ActivePin from "../../img/icons/icons_pin_active.svg";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import { FormattedMessage } from "react-intl";

const Map = ({
    getLocations,
    locations,
    monitoringPointInfo,
    visibleMonitoringPoint,
    monitoringPointName,
    toggleMonitoringPoint,
    getWaterLevels
}) => {
    const [selectedLocation, setLocation] = useState(null);

    useEffect(() => {
        if (!locations) getLocations();

        const listener = e => {
            if (e.key === "Escape") {
                setLocation(null);
                visibleMonitoringPoint(false);
                toggleMonitoringPoint(false);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    const markerHandlers = item => {
        monitoringPointInfo(item);
        setLocation(item);
        toggleMonitoringPoint(false);
    };

    let markers = "";

    if (locations !== null) {
        markers = locations.map((item, index) => (
            <Marker
                key={index}
                position={{
                    lat: item.lat,
                    lng: item.lng
                }}
                onClick={() => markerHandlers(item)}
                icon={{
                    url: ActivePin
                }}
            />
        ));
    }

    const handleInfo = (mp, sl) => {
        visibleMonitoringPoint(true);
        monitoringPointName(mp);
        getWaterLevels(mp.id, sl);
    };

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{
                lat: 51.689523,
                lng: 5.138612
            }}
            options={{
                zoomControlOptions: { position: 6 },
                fullscreenControl: false
            }}
        >
            <MarkerClusterer
                avaregeCenter
                defaultGridSize={60}
                styles={[
                    {
                        url: "img/icons/icons_pin_group.svg",
                        height: 32,
                        width: 32,
                        textColor: "#FFF"
                    }
                ]}
            >
                {markers}
                {selectedLocation && (
                    <InfoWindow
                        onCloseClick={() => {
                            setLocation(null);
                            visibleMonitoringPoint(false);
                            toggleMonitoringPoint(false);
                        }}
                        position={{
                            lat: selectedLocation.lat,
                            lng: selectedLocation.lng
                        }}
                        options={{
                            pixelOffset: new window.google.maps.Size(0, -32),
                            alignBottom: true
                        }}
                    >
                        <div>
                            <h5>
                                <FormattedMessage
                                    id="infoWindowMonitoringPoint"
                                    defaultMessage="Monitoring points:"
                                />
                            </h5>
                            {selectedLocation.monitoringPoints.map(
                                (mp, index) => (
                                    <div key={index}>
                                        <p
                                            onClick={() =>
                                                handleInfo(
                                                    mp,
                                                    selectedLocation.projectName
                                                )
                                            }
                                        >
                                            <FormattedMessage
                                                id="infoWindowName"
                                                defaultMessage="Name:"
                                            />{" "}
                                            {mp.name}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </InfoWindow>
                )}
            </MarkerClusterer>
        </GoogleMap>
    );
};

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default MapWrapped;
