"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const metricController_1 = __importDefault(require("../controller/metricController"));
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const newMetric = await metricController_1.default.addMetric(req, res);
        res.status(200).json(newMetric);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const listMetric = await metricController_1.default.getListMetric(req, res);
        res.status(200).json(listMetric);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
});
router.get('/chart', async (req, res) => {
    try {
        const listMetric = await metricController_1.default.getChartData(req, res);
        res.status(200).json(listMetric);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
});
exports.default = router;
