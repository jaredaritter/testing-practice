const caesarCipher = require('./caesar-cipher');

test('Jest works', () => {});

test('Should default to +1 shift if none specified', () => {
  expect(caesarCipher('test')).toBe('uftu');
});

test('Should shift by shift argument (no rollover)', () => {
  expect(caesarCipher('test', 1)).toBe('uftu');
  expect(caesarCipher('bamboo', 1)).toBe('cbncpp');
  expect(caesarCipher('bamboo', 5)).toBe('gfrgtt');
});

test('Should roll over upwards accurately for lowercase', () => {
  expect(caesarCipher('amazon', 1)).toBe('bnbapo');
});

test('Should roll over downwards accurately for lowercase', () => {
  expect(caesarCipher('amazon', -1)).toBe('zlzynm');
});

test('Should roll over upwards accurately for uppercase', () => {
  expect(caesarCipher('AMAZON', 1)).toBe('BNBAPO');
});

test('Should roll over downwards accurately for lowercase', () => {
  expect(caesarCipher('AMAZON', -1)).toBe('ZLZYNM');
});

test('Should not change punctuation or special characters', () => {
  expect(caesarCipher('This should work fine.', 1)).toBe(
    'Uijt tipvme xpsl gjof.'
  );
});
