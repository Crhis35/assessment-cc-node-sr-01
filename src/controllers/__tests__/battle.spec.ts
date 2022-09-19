import app from '../../app';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

const server = app.listen();

beforeAll(() => jest.useFakeTimers());
afterAll(() => server.close());

describe('BattleController', () => {
  describe('List', () => {
    test('should list all battles', async () => {
      const response = await request(server).get('/battle');
      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Battle', () => {
    test('should fail when trying a battle of monsters with an undefined monster', async () => {
      // @TODO
    });

    test('should fail when trying a battle of monsters with an inexistent monster', async () => {
      // @TODO
    });

    test('should insert a battle of monsters successfully with monster 1 winning', async () => {
      // @TODO
    });

    test('should insert a battle of monsters successfully with monster 2 winning', async () => {
      // @TODO
    });
  });

  describe('Delete Battle', () => {
    test('should delete a battle successfully', () => {
      // @TODO
    });

    test("should return 404 if the battle doesn't exists", () => {
      // @TODO
    });
  });
});
