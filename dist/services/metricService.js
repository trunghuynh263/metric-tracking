"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metricDatabase_1 = __importDefault(require("../modules/metricDatabase"));
const mappingMetric_1 = require("../mapping/mappingMetric");
const constant_1 = __importDefault(require("../constant/constant"));
const convertUnit_1 = require("../mapping/convertUnit");
const addNewMetric = async ({ userId, type, value, date, unit }) => {
    const canonical = type === constant_1.default.METRIC_TYPES.distance ? (0, convertUnit_1.toBaseDistance)(value, unit) : (0, convertUnit_1.toBaseTemp)(value, unit);
    const newMetric = await metricDatabase_1.default.addMetric(userId, type, canonical, date);
    if (!newMetric) {
        throw new Error("Add new metric not success!");
    }
    return {
        id: newMetric.id,
        userId: newMetric.user_id,
        type: newMetric.type,
        unit,
        value,
        date: newMetric.created_at
    };
};
const getListMetric = async (type, unit, userId) => {
    const listMetric = await metricDatabase_1.default.getListMetricsByUserId(type, userId);
    const data = listMetric.map((data) => {
        return (0, mappingMetric_1.mappingListMetric)(data, unit);
    });
    return data;
};
const getChartData = async (userId, type, months, unit) => {
    const listChartData = await metricDatabase_1.default.getChartData(userId, type, months ?? 1);
    return listChartData.map((data) => {
        return (0, mappingMetric_1.mappingListMetric)(data, unit);
    });
};
exports.default = {
    addNewMetric,
    getListMetric,
    getChartData
};
