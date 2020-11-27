//task 1.1 For
let arr = [2, 3, 4, 5];

let resultFor = 1;

for (let i = 0; i < arr.length; i++) {
    resultFor *= arr[i];
}

//task1.2 While
let arr = [2, 3, 4, 5];
let resultWhile = 1;
let i = 0;
function returnResult() {
    while (i < arr.length) {
        resultWhile *= arr[i];
        i++;
    }
    return resultWhile;
}
returnResult(arr);

//task 2
for (i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log(i, "is even");
    } else {
        console.log(i, "is odd");
    }
}

//task 3
let arr = [];
function randArray(k) {
    for (i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500) + 1);
    }
}
randArray(15);
console.log(arr);

//task 4
function raiseToDegree() {
    let a = parseInt(prompt("Enter a number for a", "Number"));
    let b = parseInt(prompt("Enter a number for b", "Number"));
    let result = a ** b;
    return result;
    console.log(result);
}

//task 5
function findMin(...args) {
    args.sort(function (a, b) { return a - b });
    console.log(args[0]);
}

//task 6 
function findUnique(arr){
    for(let i = 0; i<arr.length - 1; i++){
        for(let k = i +1; k < arr.length; k++){
            if(arr[i]===arr[k]){
                return false;
            }
        }
    }
    return true;
}

//task 6 Alternative solution
function findUnique(arr) {
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            return false;
        }
    }
    return true;
}


//task 7
function lastElementInArray(arr, number) {
    if (typeof (number) === 'undefined') {
        return arr.pop();
    } else if (number < arr.length) {
        let num = arr.length - number;
        let newArr = arr.slice(num);
        return newArr;
    } else {
        return arr;
    }
}

//task 8
function func(string) {
    let splittedString = string.split(" ");
    for (let i = 0; i < splittedString.length; i++) {
        splittedString[i] = splittedString[i].charAt(0).toUpperCase() + splittedString[i].slice(1);
    }
    return splittedString.join(" ");
}