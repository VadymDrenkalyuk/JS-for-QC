const calcCircle = require('./calcCircle');

describe("Calc circle tests", () => {
    test('The circle length is 138.2 if radius is 22', () => {
        expect(calcCircle.getCircleLength(22)).toBeCloseTo(138.2, 1);
    }); 

    test('Approximately area of the circle is 254.47 if radius is 9', () => {
        expect(calcCircle.getCircleArea(9)).toBeCloseTo(254.47, 2);
    }); 

    test('test calcCircleArea without parameters', () => {
        expect(calcCircle.getCircleArea().toBeNaN);
    }); 

    test('test calcCircleLength without parameters', () => {
        expect(calcCircle.getCircleLength().toBeNaN);
    }); 
})