import { Request, Response, Router } from 'express';
import { BattleController } from '../controllers/battle.controller';

const router = Router();

router.get('/', BattleController.list);
router.post('/', (req: Request, res: Response) => res.send('battle'));

export default router;
