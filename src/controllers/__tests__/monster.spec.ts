import app from '../../app';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

import factories from '../../factories';
import { Monster } from '../../models';

const server = app.listen();

afterAll(() => server.close());

describe('MonsterController', () => {
  describe('List', () => {
    test('should list all monsters', async () => {
      const sampleSize = 3;
      const monsters = factories.monster.buildList(sampleSize);
      await Promise.all(
        monsters.map(async (data) => (await Monster.query().insert(data)).id)
      );

      const response = await request(server).get('/monsters');

      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('Get', () => {
    test('should get a monster correctly', async () => {
      const monster = factories.monster.build();
      const { id } = await Monster.query().insert(monster);

      const response = await request(server).get(`/monsters/${id}`);
      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body.id).toBe(id);
    });

    test("should return 404 if monster doesn't exists", async () => {
      const response = await request(server).get(`/monsters/9999`);
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });
  });

  describe('Create', () => {
    test('should create a new monster correctly', async () => {
      const monster = factories.monster.build();
      const response = await request(server).post(`/monsters`).send(monster);
      expect(response.status).toBe(StatusCodes.CREATED);
      expect(response.body.name).toBe(monster.name);
    });
  });

  describe('Update', () => {
    test('should update a monster correctly', async () => {
      const monster = factories.monster.build();
      const postResponse = await request(server)
        .post(`/monsters`)
        .send(monster);
      expect(postResponse.status).toBe(StatusCodes.CREATED);

      const newMonsterData = factories.monster.build();
      const putResponse = await request(server)
        .put(`/monsters/${postResponse.body.id}`)
        .send(newMonsterData);

      expect(putResponse.status).toBe(StatusCodes.OK);
    });

    test("should return 404 if monster doesn't exists", async () => {
      const response = await request(server).put(`/monsters/9999`);
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });
  });

  describe('Delete', () => {
    test('should delete a monster correctly', async () => {
      const monster = factories.monster.build();
      const { id } = await Monster.query().insert(monster);

      const getResponse = await request(server).get(`/monsters/${id}`);
      expect(getResponse.body.id).toBe(id);

      const deleteResponse = await request(server).delete(`/monsters/${id}`);
      expect(deleteResponse.status).toBe(StatusCodes.NO_CONTENT);
    });

    test("should return 404 if monster doesn't exists", async () => {
      const response = await request(server).delete(`/monsters/9999`);
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });
  });

  describe('Import CSV', () => {
    test('should fail when importing csv file with an empty monster', () => {
      // @TODO
    });

    test('should fail when importing csv file with wrong or inexistent columns.', () => {
      // @TODO
    });

    test('should import all the CSV objects into the database successfully', () => {
      // @TODO
    });
  });
});
