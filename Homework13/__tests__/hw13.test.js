const { TestScheduler } = require('jest');
const sum = require('./sum');
const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2']; 

describe("HW 13 tests", () => {
    test('0.1 plus 0.2 equals 0.3', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    }); 

    test('Array has element "admin"', () => {
        
        expect(userList).toContain('admin');
    }); 

    test('The first element of the array is "Nick"', () => {
        
        expect(userList[0]).toEqual('Nick');
    }); 

    test('The last element of the array is "new_user_2"', () => {
        
        expect(userList[userList.length-1]).toEqual('new_user_2');
    }); 

    test('The array length is 5', () => {
        
        expect(userList.length).toEqual(5);
    });

    test('The type of the 3rd element is "string"', () => {
        
        expect(typeof(userList[2])).toBe('string');
    });

    test('The array doesn\'t have the 8th element', () => {
        
        expect(userList[7]).toBeUndefined;
    });
});