const analyze = require('./analyze');

test('Jest works', () => {});

test('Should not return null or undefined', () => {
  expect(analyze([1, 2, 3])).not.toBeNull();
  expect(analyze([1, 2, 3])).not.toBeUndefined();
});

test('Should handle non-string arguments by returning object with error message', () => {
  expect(analyze('word')).toStrictEqual({ msg: 'Argument must be array' });
  expect(analyze(10)).toStrictEqual({ msg: 'Argument must be array' });
  expect(analyze(undefined)).toStrictEqual({ msg: 'Argument must be array' });
  expect(analyze(null)).toStrictEqual({ msg: 'Argument must be array' });
});
