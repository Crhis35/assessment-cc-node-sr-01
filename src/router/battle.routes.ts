import { Router } from 'express';
import { BattleController } from '../controllers/battle.controller';

const router = Router();

router.get('/', BattleController.list);

export default router;
