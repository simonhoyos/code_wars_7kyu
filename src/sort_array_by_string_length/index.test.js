const sortByLength = require("./index");

test("should return I, To, Beg, Life", () => {
  expect(sortByLength(["Beg", "Life", "I", "To"])).toMatchObject([
    "I",
    "To",
    "Beg",
    "Life"
  ]);
});

test("should return '', Pizza, Brains, Moderately", () => {
  expect(sortByLength(["", "Moderately", "Brains", "Pizza"])).toMatchObject([
    "",
    "Pizza",
    "Brains",
    "Moderately"
  ]);
});

test("should return Short, Longer, Longest", () => {
  expect(sortByLength(["Longer", "Longest", "Short"])).toMatchObject([
    "Short",
    "Longer",
    "Longest"
  ]);
});
