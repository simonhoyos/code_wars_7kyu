const listToArray = require('./index');

const list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

const list2 = {
  value: "foo",
  next: {
    value: "bar",
    next: null
  }
};

test('should return 1, 2, 3', () => {
  expect(listToArray(list1)).toMatchObject([1, 2, 3]);
});

test('should return foo, bar, null', () => {
  expect(listToArray(list2)).toMatchObject(["foo", "bar"]);
});
