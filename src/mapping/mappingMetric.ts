import constant from '../constant/constant';
import { fromBaseDistance, fromBaseTemp } from './convertUnit';

const metricMapping = (data: any) => {
    return {
        userId: data.user_id,
        type: data.type,
        unit: data.unit,
        value: data.value,
        date: data.created_at
    }
}

const mappingListMetric = (data: any, unit: any) => {
    const isDistance = data.type === constant.METRIC_TYPES.distance;
    
    let finalUnit: string;
    if (isDistance) {
        finalUnit = constant.DISTANCE_UNITS.includes(unit) ? unit! : 'm';
    } else {
        finalUnit = constant.TEMPERATURE_UNITS.includes(unit) ? unit! : 'k';
    }

    const value = isDistance
        ? fromBaseDistance(+data.value, finalUnit as any)
        : fromBaseTemp(+data.value, finalUnit as any);

    return {
        id: data.id,
        userId: data.user_id,
        value,
        unit: finalUnit,
        type: data.type,
        date: data.created_at,
    };
}

export {
    metricMapping,
    mappingListMetric
}