import { Battle } from '..';

describe('Battle Model', () => {
  test('should have relation mapping', () => {
    expect(Battle.relationMappings).toHaveProperty('monsterA');
    expect(Battle.relationMappings).toHaveProperty('monsterB');
    expect(Battle.relationMappings).toHaveProperty('winner');
  });
});
