const filterFood = require ('./food');

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

const min = 12;
const max = 40;
const testObject = { kind: 'pepper', price: 27 };
const testObject2 = { kind: 'lemon', price: 50 };

describe('filtered food tests', () => {
    test('the length of the filtered array equals 3', () => {
        expect(filterFood.filterFoodPrice(food, min, max)).toHaveLength(3);
    }); 

    test('verify the array include the testObject', () => {
        expect(filterFood.filterFoodPrice(food, min, max)).toContainEqual(testObject);
    });
    
    test('verify the filtered array has 2, 3 and 4 elements of the initial array', () => {
        expect(filterFood.filterFoodPrice(food, min, max)).toContain(food[2], food[3], food[4]);
    }); 

    test('verify the price of the 1st element is greater than min', () => {
        expect(filterFood.filterFoodPrice(food, min, max)[0].price).toBeGreaterThan(min);
    }); 

    test('verify the price of the 3rd element is less than max', () => {
        expect(filterFood.filterFoodPrice(food, min, max)[2].price).toBeLessThan(max);
    });

    test('verify the filtered array doesn\'t have the testObject2', () => {
        expect(filterFood.filterFoodPrice(food, min, max)).not.toContain(testObject2);
    });

    test('verify the filtered array length is 3', () => {
        expect(filterFood.filterFoodPrice(food, min, max).length).toEqual(3);
    });

    test('verify the type of the 2nd element is object', () => {
        expect(typeof (filterFood.filterFoodPrice(food, min, max)[1])).toEqual('object');
    });

    test('verify the value of the firtst element key is "bred"', () => {
        expect((filterFood.filterFoodPrice(food, min, max)[0].kind)).toEqual('bred');
    });
});