import config from "../config";

export function fetchLocations() {
    return fetch(`${config.BASE_URL}${config.LOCATIONS}`)
        .then(res => res.json())
        .then(data => data.locations);
}
