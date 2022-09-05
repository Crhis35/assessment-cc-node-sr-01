import { Knex } from 'knex';
import { Battle, Monster } from '../../src/models';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable(Battle.tableName, (table: Knex.TableBuilder) => {
    table.increments();
    table.timestamps();
    table.integer('winner');
    table.integer('monsterA');
    table.integer('monsterB');
    table.foreign('winner').references('id').inTable(Monster.tableName);
    table.foreign('monsterA').references('id').inTable(Monster.tableName);
    table.foreign('monsterB').references('id').inTable(Monster.tableName);
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(Battle.tableName);
