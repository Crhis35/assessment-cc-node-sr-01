import { faker } from '@faker-js/faker';
import { Factory } from 'rosie';
import { Monster } from '../models';

export default Factory.define(Monster.tableName).attrs({
  name: `${faker.animal.type()} ${faker.animal.type()}`,
  attack: faker.datatype.number({ min: 10, max: 100 }),
  defense: faker.datatype.number({ min: 10, max: 100 }),
  hp: faker.datatype.number({ min: 10, max: 100 }),
  speed: faker.datatype.number({ min: 10, max: 100 }),
  imageUrl: faker.image.imageUrl(),
});
