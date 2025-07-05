import metricService from '../services/metricService';

const addMetric = (req: any, res: any) => {
    const body = req.body;
    const newMetric = {
        userId: body.userId,
        type: body.type,
        value: body.value,
        unit: body.unit,
        date: body.date ? new Date(body.date) : new Date()
    };
    try {
        return metricService.addNewMetric(newMetric);
    } catch (error) {
        throw new Error ('Add new metric fail. Please check your data and try again.');
    }
}

const getListMetric = async (req: any, res: any) => {
    const {type, userId, unit} = req.query;
    return metricService.getListMetric(type, unit, userId);
}

const getChartData = async (req: any, res: any) => {
    const { userId, type, period, unit } = req.query;
    return metricService.getChartData(userId, type, period, unit);
}

export default {
    addMetric,
    getListMetric,
    getChartData
}