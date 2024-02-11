import sum from '../basic';
import state from '../charecterState.js'
test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('should state healthy', () => {
  expect(state({name: 'Rogue', health: 51})).toBe('healthy')
})
test('should state wounded', () => {
  expect(state({name: 'Mag', health: 50})).toBe('wounded')
})
test('should state wounded', () => {
  expect(state({name: 'Mag', health: 15})).toBe('wounded')
})
test('should state critical', () => {
  expect(state({name: 'Warrior', health: 1})).toBe('critical')
})
