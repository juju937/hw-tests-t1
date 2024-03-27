import checkHealthStatus from '../healthbar.js';

test.each([
  [{name: 'Маг', health: 90}, 'healthy'],
  [{name: 'Лучник', health: 40}, 'wounded'],
  [{name: 'Мечник', health: 10}, 'critical'],
])(
  ('should show character %s health as %s'),
  (character, expected) => {
    const result = checkHealthStatus(character);
    expect(result).toBe(expected);
  }
)
