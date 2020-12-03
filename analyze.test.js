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

test('Should return object with correct values', () => {
  expect(analyze([1, 2, 3])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
  expect(analyze([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  expect(analyze([1, 3, 3, 18, 46])).toStrictEqual({
    average: 14.2,
    min: 1,
    max: 46,
    length: 5,
  });
});

test('Should work with negative numbers and zero', () => {
  expect(analyze([1, 2, 3, 4, -5])).toStrictEqual({
    average: 1,
    min: -5,
    max: 4,
    length: 5,
  });
  expect(analyze([0, 2, 3, 4, -4])).toStrictEqual({
    average: 1,
    min: -4,
    max: 4,
    length: 5,
  });
  expect(analyze([-4, 4, 3, 2, 0])).toStrictEqual({
    average: 1,
    min: -4,
    max: 4,
    length: 5,
  });
});
