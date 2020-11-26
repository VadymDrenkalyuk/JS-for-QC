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
    try{
        let result = console.log(width * height);
        if (isNaN(width) || isNaN(height)) {
            throw new Error("Enter number values")
        }
        return result;
    }catch(e){
        console.log(e.name + ": " + e.message);
    }
}

//task 3
function checkAge() {
    try {
        let age = prompt("Enter your age", "Your age");
        let emtyField = new Error("The field is empty! Please enter your age");
        let notANumber = new Error("Please enter a number value");
        let tooYoung = new Error("You are too young to watch this video");
        if (age === "") {
            throw emtyField;
        } else if (isNaN(age)) {
            throw notANumber;
        } else if (age < 14) {
            throw tooYoung
        } else {
            document.write("Welcome to the video");
        }
    } catch (e) {
        alert(e);
        checkAge();
    }
}