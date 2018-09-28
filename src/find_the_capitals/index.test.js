const capitals = require('./index');

test('should return 0, 3, 4, 6', () => {
  expect(capitals('CodEWaRs')).toMatchObject([0,3,4,6]);
});
