import Knex from 'knex';
import knexConfig from '../../knexfile';

export default Knex(knexConfig['development']);
