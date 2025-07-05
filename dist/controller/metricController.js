"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metricService_1 = __importDefault(require("../services/metricService"));
const addMetric = (req, res) => {
    const body = req.body;
    const newMetric = {
        userId: body.userId,
        type: body.type,
        value: body.value,
        unit: body.unit,
        date: body.date ? new Date(body.date) : new Date()
    };
    try {
        return metricService_1.default.addNewMetric(newMetric);
    }
    catch (error) {
        throw new Error('Add new metric fail. Please check your data and try again.');
    }
};
const getListMetric = async (req, res) => {
    const { type, userId, unit } = req.query;
    return metricService_1.default.getListMetric(type, unit, userId);
};
const getChartData = async (req, res) => {
    const { userId, type, period, unit } = req.query;
    return metricService_1.default.getChartData(userId, type, period, unit);
};
exports.default = {
    addMetric,
    getListMetric,
    getChartData
};
