"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const addMetric = async (userId, type, value, date) => {
    const query = `
        insert into metric (user_id, type, value, created_at) values ($1, $2, $3, $4) returning *
    `;
    const result = await database_1.db.query(query, [userId, type, value, date]);
    return result.rows[0];
};
const getListMetricsByUserId = async (type, userId) => {
    let query = `
        select * from metric where type = $1 
    `;
    const values = [type];
    if (userId) {
        query += `and user_id = $2`;
        values.push(userId);
    }
    const result = await database_1.db.query(query, values);
    return result.rows;
};
const getChartData = async (userId, type, months) => {
    const query = `
        SELECT DISTINCT ON (DATE(created_at)) *
        FROM metric
        WHERE user_id = $1
            AND type = $2
            AND created_at >= NOW() - INTERVAL '${months} month'
        ORDER BY DATE(created_at), created_at DESC;
    `;
    const result = await database_1.db.query(query, [userId, type]);
    return result.rows;
};
exports.default = {
    addMetric,
    getListMetricsByUserId,
    getChartData
};
