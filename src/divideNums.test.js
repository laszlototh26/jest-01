const { divideNums } = require('./divideNums');

describe('divideNums', () => {

    test('should work with numA = 10, numB = 5', () => {

        const result = divideNums(10, 5);
    
        expect(result).toBe(2);
    });

    test('should work with negative numbers', () => {

        expect( divideNums(-16, 4) ).toBe(-4);
    });

    test('should throw when receives non-number', () => {

        expect( divideNums.bind('15', 5) ).toThrow();
    });

    test('should throw when dividing by zero', () => {

        expect(() => { divideNums(20, 0); }).toThrow();
    });

});


