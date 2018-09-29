const partlist = require('./index');

test('should return [["I", "wish I hadn\'t come"], ["I wish", "I hadn\'t come"], ["I wish I", "hadn\'t come"], ["I wish I hadn\'t", "come"]]', () => {
  expect(partlist(["I", "wish", "I", "hadn't", "come"])).toMatchObject([["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]);
});

test('should return [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]', () => {
  expect(partlist(["cdIw", "tzIy", "xDu", "rThG"])).toMatchObject([["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
});

test('should return [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]', () => {
  expect(partlist(["vJQ", "anj", "mQDq", "sOZ"])).toMatchObject([["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]);
});
