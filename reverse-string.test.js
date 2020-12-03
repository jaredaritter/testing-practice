const reverseString = require('./reverse-string');

test('Jest works', () => {});

test('Should not return null or undefined', () => {
  expect(reverseString('test')).not.toBeNull();
  expect(reverseString('test')).not.toBeUndefined();
});

test('Should handle non-string arguments by returning an empty string', () => {
  expect(reverseString(10)).toBe('');
  expect(reverseString(undefined)).toBe('');
  expect(reverseString(null)).toBe('');
});

test('Should handle handle single words', () => {
  expect(reverseString('test')).toBe('tset');
  expect(reverseString('Carnival')).toBe('lavinraC');
});

test('Should handle multiple words', () => {
  expect(reverseString('this is a test')).toBe('tset a si siht');
  expect(reverseString('This Is Only a Test')).toBe('tseT a ylnO sI sihT');
});
