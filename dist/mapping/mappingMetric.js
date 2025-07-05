"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mappingListMetric = exports.metricMapping = void 0;
const constant_1 = __importDefault(require("../constant/constant"));
const convertUnit_1 = require("./convertUnit");
const metricMapping = (data) => {
    return {
        userId: data.user_id,
        type: data.type,
        unit: data.unit,
        value: data.value,
        date: data.created_at
    };
};
exports.metricMapping = metricMapping;
const mappingListMetric = (data, unit) => {
    const isDistance = data.type === constant_1.default.METRIC_TYPES.distance;
    let finalUnit;
    if (isDistance) {
        finalUnit = constant_1.default.DISTANCE_UNITS.includes(unit) ? unit : 'm';
    }
    else {
        finalUnit = constant_1.default.TEMPERATURE_UNITS.includes(unit) ? unit : 'k';
    }
    const value = isDistance
        ? (0, convertUnit_1.fromBaseDistance)(+data.value, finalUnit)
        : (0, convertUnit_1.fromBaseTemp)(+data.value, finalUnit);
    return {
        id: data.id,
        userId: data.user_id,
        value,
        unit: finalUnit,
        type: data.type,
        date: data.created_at,
    };
};
exports.mappingListMetric = mappingListMetric;
