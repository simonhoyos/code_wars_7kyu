const containAllRots = require('./index');

test('should return true', () => {
  expect(containAllRots('12341234', ['asdg', '12341234', '23412341', '34123412', '41234123']))
})

