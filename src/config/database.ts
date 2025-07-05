import { Pool } from 'pg';

export const db = new Pool({
  user: process.env.POSTGRES_USERNAME || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'metric-tracking',
  password: process.env.DB_PASSWORD || '1234',
  port: 5432,
});

