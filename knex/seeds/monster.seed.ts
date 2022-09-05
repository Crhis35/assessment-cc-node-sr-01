import { Knex } from 'knex';
import { Monster } from '../../src/models';

const now = new Date();

const monsters = [
  {
    id: 1,
    name: 'Dead Unicorn',
    attack: 60,
    defense: 40,
    hp: 10,
    speed: 80,
    imageUrl:
      'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 2,
    name: 'Old Shark',
    attack: 50,
    defense: 20,
    hp: 80,
    speed: 90,
    imageUrl:
      'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/old-shark.png',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 3,
    name: 'Red Dragon',
    attack: 90,
    defense: 80,
    hp: 90,
    speed: 70,
    imageUrl:
      'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/red-dragon.png',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 4,
    name: 'Robot Bear',
    attack: 50,
    defense: 40,
    hp: 80,
    speed: 60,
    imageUrl:
      'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/robot-bear.png',
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 5,
    name: 'Angry Snake',
    attack: 80,
    defense: 20,
    hp: 70,
    speed: 80,
    imageUrl:
      'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/angry-snake.png',
    createdAt: now,
    updatedAt: now,
  },
];

export const seed = async (knex: Knex): Promise<void> => {
  await knex(Monster.tableName).del();
  await knex(Monster.tableName).insert(monsters);
};
