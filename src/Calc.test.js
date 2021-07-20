const isNum = require('./Calc')

test('the values are not null', () => {
  expect(isNum.calcPower()).not.toBeNull();
});

test('base 2 power 3 equals 8', () => {
    expect(isNum.calcPower(2,3)).toBe(8);
});

test('values are not numbers', () => {
    expect(isNum.calcPower(2,'a')).toBeNaN();
});