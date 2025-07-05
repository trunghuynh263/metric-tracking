import metricDb from '../modules/metricDatabase';
import { MetricInterface } from '../interface/metric';
import { mappingListMetric } from '../mapping/mappingMetric';
import constant from '../constant/constant';
import { toBaseDistance, toBaseTemp } from '../mapping/convertUnit';
const addNewMetric = async (
   {
        userId,
        type,
        value,
        date,
        unit
   }: MetricInterface
) => {
    const canonical = type === constant.METRIC_TYPES.distance ? toBaseDistance(value, unit) : toBaseTemp(value, unit);
    const newMetric = await metricDb.addMetric(userId, type, canonical, date);
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
    }
}

const getListMetric = async (
    type:  number,
    unit?: any,
    userId?: any,
    
) => {
    const listMetric = await metricDb.getListMetricsByUserId(type, userId);

    const data = listMetric.map((data: any) => {
        return mappingListMetric(data, unit);
    });
    return data;
}

const getChartData = async (
    userId: number,
    type: number,
    months?: any,
    unit?: any
) => {
    const listChartData = await metricDb.getChartData(userId, type, months ?? 1);
    
    return listChartData.map((data: any) => {
        return mappingListMetric(data, unit);
    });
}

export default {
    addNewMetric,
    getListMetric,
    getChartData
}