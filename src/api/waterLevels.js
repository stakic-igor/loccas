import config from "../config";

export function fetchWaterLevels(mp, sl) {
    return fetch(`${config.BASE_URL}${config.MONITORING_POINT}/${sl}/${mp}`)
        .then(res => res.json())
        .then(data => data);
}
