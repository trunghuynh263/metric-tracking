const METRIC_TYPES = {
    distance: 1,
    temperature: 2
}

const DISTANCE_UNITS = ['m', 'cm', 'in', 'ft', 'yd'] as const;


const TEMPERATURE_UNITS = ['c', 'f', 'k'] as const;

export default {
    METRIC_TYPES,
    DISTANCE_UNITS,
    TEMPERATURE_UNITS
}