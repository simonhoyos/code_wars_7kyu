const solve = require('./index');

test("should return ['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd']", () => {
  expect(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr'])).toMatchObject(['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd']);
});

test("should return ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']", () => {
  expect(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"])).toMatchObject(['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']);
});

test("should return ['Begin on Road A']", () => {
  expect(solve(['Begin on Road A'])).toMatchObject(['Begin on Road A']);
});
