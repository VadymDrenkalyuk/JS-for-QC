//task 1
function testThrow(e) {
    try {
        throw e;
    }
    catch (e) {
        console.log(`Caught ${e}`);
    }
}

//task 2
function calcRectangleArea(width, height) {
        if (isNaN(width) || isNaN(height)) {
            throw new Error("Enter numeric values")
        }
        let result = width * height;
        return result;
}

let width = prompt("Enter width", "Width");
let height = prompt("Enter heigth", "Heigth");

try {
    calcRectangleArea(width, height);
} catch (e) {
    console.log(`${e.name}: ${e.message}`);
}

//task 3
function checkAge() {
    try {
        let age = prompt("Enter your age", "Your age");
        if (age != null) {
            if (age.trim() === "") {
                throw new Error("The field is empty! Please enter your age");
            } else if (isNaN(age)) {
                throw new Error("Please enter a numeric value");
            } else if (age < 14) {
                throw new Error("You are too young to watch this video");
            } else {
                document.write("Enjoy the video");
            }
        }
    } catch (e) {
        alert(e);
        checkAge();
    }
}

//task 4
class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}

function showMonthName(month) {
    //throw new Error(); // if any other type of exception occurs

    switch (month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "Jule";
        case 8:
            return "August";
        case 9:
            return "Septebmer";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            throw new MonthException("Incorrect month number");
    }
}

try {
    let number = prompt("Enter a number of month", "Number");
    showMonthName(number);
} catch (e) {
    if (e.name == "MonthException") {
        console.log(e.name + " " + e.message);
    } else {
        console.log("Unexpected error");
    }
}

//task 5
function showUser(id) {
    if (id >= 0) {
        return {userId: id}
    } else {
        throw new Error("User id can't be negative: " + id);
    }
} 

function showUsers(ids) {
    let arr = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            arr.push(showUser(ids[i]));
        } catch (e) {
            console.log(e.message);
        }
    }
    return arr;
}