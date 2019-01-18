const generateShape = require("./index");

test("should return ", () => {
  expect(generateShape(8)).toBe(
    "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
  );
});
