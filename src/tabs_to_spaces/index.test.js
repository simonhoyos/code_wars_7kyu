const tabToSpaces = require('./index');

test('should return ab  12', () => {
  expect(tabToSpaces("ab\t12")).toBe("ab  12");
});

test('should return a   123\n    123', () => {
  expect(tabToSpaces("a\t123\n\t123")).toBe("a   123\n    123");
});

test('should return a   bcdef   1   23456\nab  cdef    123 456\n    abcdef  12  3456\na   bcdef       12346', () => {
  expect(tabToSpaces("a\tbcdef\t1\t23456\nab\tcdef\t123 456\n\tabcdef\t12\t3456\na\tbcdef\t\t12346")).toBe("a   bcdef   1   23456\nab  cdef    123 456\n    abcdef  12  3456\na   bcdef       12346");
});
