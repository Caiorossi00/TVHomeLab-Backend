import { Router } from 'express';
import { getTodayMatchesController } from '../controllers/matches.controller.js';

const router = Router();

router.get('/today', getTodayMatchesController);

export default router;
