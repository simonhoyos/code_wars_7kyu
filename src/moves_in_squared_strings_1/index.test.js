const {
  vertMirror,
  horMirror,
  oper,
} = require('./');

test('should return QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw', () => {
  expect(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")).toBe('QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw');
});

test('should return EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP', () => {
  expect(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx")).toBe('EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP');
});

test('should return yeCt\nCSbg\nJVhv\nlVHt', () => {
  expect(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt")).toBe('yeCt\nCSbg\nJVhv\nlVHt');
});

test('should return cEYz\nLPKo\ndbrZ\nnjMK', () => {
  expect(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")).toBe('cEYz\nLPKo\ndbrZ\nnjMK');
});
