const capitalize = require('./capitalize');

test('Jest works', () => {});

test('Should not return null or undefined', () => {
  expect(capitalize('test')).not.toBeNull();
  expect(capitalize('test')).not.toBeUndefined();
});

test('Should handle non-string arguments by returning an empty string', () => {
  expect(capitalize(10)).toBe('');
  expect(capitalize(undefined)).toBe('');
  expect(capitalize(null)).toBe('');
});

test('Should return single word with capitalized first letter', () => {
  expect(capitalize('test')).toBe('Test');
  expect(capitalize('crazy')).toBe('Crazy');
});

test('Should return multiple words with only first character of first word capitalized', () => {
  expect(capitalize('this should work')).toBe('This should work');
});

test('Should make no changes if argument string already capitalized correctly', () => {
  expect(capitalize('Test')).toBe('Test');
});
