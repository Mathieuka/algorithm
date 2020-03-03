import { firstNonConsecutive } from './first-non-consecutive-number';

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
test('return divisor numbers', () => {
    expect(firstNonConsecutive([1, 2])).toEqual(null);
    expect(firstNonConsecutive([1,2,4])).toEqual(4);
    expect(firstNonConsecutive([0])).toEqual(null);
    expect(firstNonConsecutive([-3, -2, 0, 1])).toEqual(0);
});
