import { Knex } from 'knex';
import { Monster } from '../../src/models';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable(Monster.tableName, (table: Knex.TableBuilder) => {
    table.increments();
    table.timestamps();
    table.string('name').notNullable();
    table.string('imageUrl').notNullable();
    table.integer('attack').notNullable();
    table.integer('defense').notNullable();
    table.integer('hp').notNullable();
    table.integer('speed').notNullable();
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(Monster.tableName);
