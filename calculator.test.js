const calculator = require('./calculator');

test('Jest works', () => {});

test('Should add 1 plus 2 to make 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Should add all number arguments together', () => {
  expect(calculator.add(1, 2, 3, 4, 5)).toBe(15);
});

test('Should subtract 2 from 3 to make 1', () => {
  expect(calculator.sub(3, 2)).toBe(1);
});

test('Should subtract all number arguments from each other in sequential order from the left', () => {
  expect(calculator.sub(1, 2, 3, 4, 5)).toBe(-13);
});

test('Should multiply 2 and 3 to make 6', () => {
  expect(calculator.mul(2, 3)).toBe(6);
});

test('Should multiply all number arguments with each other', () => {
  expect(calculator.mul(1, 2, 3, 4, 5)).toBe(120);
});

test('Should divide 6 by 3 to make 2', () => {
  expect(calculator.div(6, 3)).toBe(2);
});

test('Should divide all number arguments from each other in sequential order from the left', () => {
  expect(calculator.div(120, 5, 4, 3, 2)).toBe(1);
  expect(calculator.div(5, 4, 3, 2)).toBeCloseTo(0.2083);
});

test('should handle decimals', () => {
  expect(calculator.add(1, 2.5)).toBe(3.5);
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(calculator.sub(3.25, 2.75)).toBe(0.5);
  expect(calculator.div(5, 8)).toBe(0.625);
});

test('should handle negative numbers', () => {
  expect(calculator.add(-1, -2)).toBe(-3);
  expect(calculator.add(-0.1, -0.2)).toBeCloseTo(-0.3);
  expect(calculator.sub(-3, -2)).toBe(-1);
  expect(calculator.mul(-3, -5)).toBe(15);
  expect(calculator.div(5, -8)).toBe(-0.625);
});

test('should handle zero', () => {
  expect(calculator.add(5, 0)).toBe(5);
  expect(calculator.sub(5, 0)).toBe(5);
  expect(calculator.mul(5, 0)).toBe(0);
  expect(calculator.div(0, 5)).toBe(0);
  expect(calculator.div(5, 0)).toBe(Infinity);
});
