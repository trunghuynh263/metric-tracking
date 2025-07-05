import express from 'express';
import metricRouter from './routes/metricRouter';

const app = express();
app.use(express.json());

app.use('/metrics', metricRouter);

app.get('/', (req: any, res: any) => {
  res.send('Hello')
})

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});