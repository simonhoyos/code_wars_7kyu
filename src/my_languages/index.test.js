const myLanguages = require('./index');

test('should return ruby, python', () => {
  expect(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})).toMatchObject(["Ruby", "Python"])
})

