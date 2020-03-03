import { nbYear } from './growth-of-a-population';

// https://www.codewars.com/kata/563b662a59afc2b5120000c6
describe('Should return the number of year to see its population greater or equal of n', () => {
    test('Should return 3 years', () => {
        expect(nbYear(0, 0 ,0, 0)).toEqual(0);
        expect(nbYear(100, 100, 0, 120)).toEqual(1);
        expect(nbYear(100, 2, 5, 120)).toEqual(3);
        expect(nbYear(1500000, 0, 10000, 2000000)).toEqual(50);

    })
})