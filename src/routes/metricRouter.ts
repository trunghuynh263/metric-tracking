import { Router, Request, Response } from 'express';
import metricController from '../controller/metricController';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const newMetric = await metricController.addMetric(req, res);
        res.status(200).json(newMetric);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const listMetric = await metricController.getListMetric(req, res);
        res.status(200).json(listMetric);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
});

router.get('/chart', async (req: Request, res: Response) => {
    try {
        const listMetric = await metricController.getChartData(req, res);
        res.status(200).json(listMetric);
    } catch (e: any) {
        res.status(400).json({ error: e.message });
    }
})

export default router;
