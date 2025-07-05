import { db } from '../config/database';

const addMetric = async (
    userId: number,
    type: number,
    value: number,
    date: Date
) => {
    const query = `
        insert into metric (user_id, type, value, created_at) values ($1, $2, $3, $4) returning *
    `;
    const result: any = await db.query(query, [userId, type, value, date]);
    return result.rows[0];
}

const getListMetricsByUserId = async (
    type: number,
    userId: number,
) => {
    let query = `
        select * from metric where type = $1 
    `;
    const values: any = [type];
    if (userId) {
        query += `and user_id = $2`;
        values.push(userId);
    }
    const result = await db.query(query, values);
    return result.rows;
}

const getChartData = async (
    userId: number,
    type: number,
    months: number
) => {
    const query = `
        SELECT DISTINCT ON (DATE(created_at)) *
        FROM metric
        WHERE user_id = $1
            AND type = $2
            AND created_at >= NOW() - INTERVAL '${months} month'
        ORDER BY DATE(created_at), created_at DESC;
    `;
    const result = await db.query(query, [userId, type]);
    return result.rows;
}

export default {
    addMetric,
    getListMetricsByUserId,
    getChartData
}