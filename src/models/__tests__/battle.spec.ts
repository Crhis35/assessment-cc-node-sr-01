import { Battle } from '..';

describe('Battle Model', () => {
  test('should have relation mapping', () => {
    expect(Battle.relationMappings).toHaveProperty('monsterARelation');
    expect(Battle.relationMappings).toHaveProperty('monsterBRelation');
    expect(Battle.relationMappings).toHaveProperty('winnerRelation');
  });
});
