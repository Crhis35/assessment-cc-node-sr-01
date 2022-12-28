import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Battle } from '../models';
import { Monster } from '../models/monster.model';

const list = async (req: Request, res: Response): Promise<Response> => {
  const battles = await Battle.query();
  return res.status(StatusCodes.OK).json(battles);
};

type IStartBattle = {
  monsterAId: string;
  monsterBId: string;
};

const startBattle = async (
  req: Request<unknown, unknown, IStartBattle>,
  res: Response
): Promise<Response> => {
  const { monsterAId, monsterBId } = req.body;
  if (!monsterAId || !monsterBId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Missing monsterAId or monsterBId',
    });
  }
  const monster = await Promise.all([
    Monster.query().findById(monsterAId),
    Monster.query().findById(monsterBId),
  ]);

  if (monster.some((monster) => monster === undefined)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Missing monsterAId or monsterBId',
    });
  }

  const battles = await Battle.query();
  return res.status(StatusCodes.OK).json(battles);
};

export const BattleController = {
  list,
  startBattle,
};
