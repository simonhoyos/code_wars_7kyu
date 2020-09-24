const menFromBoys = require('./index');

test('Should return 72, 76, 82, 100, 91, 85', () => {
  expect(menFromBoys([82, 91, 72, 76, 76, 100, 85])).toMatchObject([72, 76, 82, 100, 91, 85])
})
