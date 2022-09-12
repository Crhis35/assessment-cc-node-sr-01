import { Knex } from 'knex';
import { Battle } from '../../src/models';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable(Battle.tableName, (table: Knex.TableBuilder) => {
    table.increments();
    table.timestamps();
    table.integer('winner');
    table.integer('monsterA');
    table.integer('monsterB');
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable(Battle.tableName);
