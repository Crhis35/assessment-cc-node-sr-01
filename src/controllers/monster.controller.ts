import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { DBError, Id, NotNullViolationError } from 'objection';
import { Monster } from '../models';
import csv from 'csvtojson';
import { readFileSync } from 'fs';

export const get = async (req: Request, res: Response): Promise<Response> => {
  const id: Id = req.params.id;
  const monster = await Monster.query().findById(id);
  return res.status(StatusCodes.OK).json(monster);
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const monster = await Monster.query().insert(req.body);
  return res.status(StatusCodes.CREATED).json(monster);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;
  await Monster.query().findById(id).patch(req.body);
  return res.sendStatus(StatusCodes.OK);
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: Id = req.params.id;
  await Monster.query().deleteById(id);
  return res.sendStatus(StatusCodes.NO_CONTENT);
};

export const importCsv = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const content = readFileSync(req.file!.path, { encoding: 'utf-8' });
  const data = await csv().fromString(content);
  try {
    await Monster.query().insertGraph(data);
  } catch (e) {
    if (e instanceof NotNullViolationError || e instanceof DBError) {
      const message = 'Wrong data mapping.';
      return res.status(StatusCodes.BAD_REQUEST).json({ message });
    }
  }
  return res.sendStatus(StatusCodes.CREATED);
};

export const MonsterController = {
  get,
  create,
  update,
  remove,
  importCsv,
};
