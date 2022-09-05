import { Router } from 'express';

import monsterRouter from './monster.routes';
import battleRouter from './battle.routes';

const router = Router();

router.use('/monsters', monsterRouter);
router.use('/battle', battleRouter);

export default router;
