const functions = require('./functions');
const calculator = require('./calculator');
const capitalized = require('./capitalize');

const t = functions.stringLength('Hello this');
const r = functions.reverseString('Hello this');
const add = calculator.add(2,3);
const subs = calculator.substract(5,2);
const div = calculator.divide(4,2);
const mult = calculator.multiply(5,2);

test('zero', () => {
  expect(t).not.toBeNull();
});

test('Undefined', () => {
  expect(t).toBeDefined();
});

test ('Not longer than 10 characters', () => {
  expect(t).toBeLessThanOrEqual(10);
});


test ('Not reversed', () => {
  expect(r).toEqual('siht olleH');
});

describe('Add', () => {
    test('returns', () => {
        expect(add).toBe(5);
      });
    
      test('returned value not be greater than 5', () => {
        expect(add).not.toBeGreaterThan(5);
      });
    
      test('returned value not be less than 5', () => {
        expect(add).not.toBeLessThan(5);
      });
});

describe('Substract', () => {
    test('returns', () => {
        expect(subs).toBe(3);
      });
    
      test('returned value not be greater than 5', () => {
        expect(subs).not.toBeGreaterThan(3);
      });
    
      test('returned value not be less than 5', () => {
        expect(subs).not.toBeLessThan(3);
      });
});
describe('Divide', () => {
    test('returns', () => {
        expect(div).toBe(2);
      });
    
      test('returned value not be greater than 5', () => {
        expect(div).not.toBeGreaterThan(2);
      });
    
      test('returned value not be less than 5', () => {
        expect(div).not.toBeLessThan(2);
      });
});
describe('Multiply', () => {
    test('returns', () => {
        expect(mult).toBe(10);
      });
    
      test('returned value not be greater than 5', () => {
        expect(mult).not.toBeGreaterThan(10);
      });
    
      test('returned value not be less than 5', () => {
        expect(mult).not.toBeLessThan(10);
      });
});

test('Not Capitalized', () => {
    expect(capitalized('hello')).toEqual('Hello');
  });