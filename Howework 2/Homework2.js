//task 1
let x = 1;
let y = 2;

let res1 = String(x)+String(y);
console.log(res1); //"12"
console.log(typeof res1); //string

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(y-x);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x * y * "n";
console.log(res4); // NaN
console.log(typeof res4); // "number"

//task 2
let n = prompt("Enter your number", "Number");

if (n%2==0 && n%7==0 && n>0){
console.log ("Your number is a positive odd and is a multiple of 7")
} else {
    console.log("Entered value is not a positive and multiple of 7 odd")
};

//task 3
let arr = [];
arr[0] = 2;
arr[1] = "String";
arr[2] = true;
arr[3] = null;
document.write(arr.length);
let value = arr.push(prompt("Enter any value to add it to the arr massive", "Value"));
document.write(arr[4]);
arr.shift(0);
document.write(arr);

//task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
let citiesJoined = cities.join("*");

//task 5
let isAdult = prompt("Are you adult?", "Your age");
if (isAdult>0 && isAdult<=17){
    console.log("You are too young")} else if(isAdult>0 && isAdult>=18){
        console.log("You are adult")
    }else{
        console.log("Enter your real age")
    };

//task 6
let a = prompt("Enter number for side A ", "Side A");
let b = prompt("Enter number for side B ", "Side B");
let c = prompt("Enter number for side C ", "Side C");

let p = (parseInt(a)+parseInt(b)+parseInt(c))/2;
let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));

if (a + b <= c && a + c <= b && b + c <= a) {
    console.log("Incorrect data");
  }else if (a**2 == b**2+c**2 || b**2 == a**2+c**2 || c**2 == b**2 +a**2){
    console.log("Triangle is right-angled, S = ", S.toFixed(3));
  }else{
    console.log("Triangle is not right-angled, S = ", S.toFixed(3));
  }

//task 7 switch

let h = new Date().getHours();

switch(true){
    case (h>=23 && h<5):
        console.log("Доброй ночи");
        break;
    case (h>=5 && h<11):
        console.log ("Доброе утро");
        break;
    case (h>=11 && h<17):
        console.log("Добрый день");
        break;
    case (h>=17 && h<23):
        console.log("Добрый вечер");
    break;
    default:
        console.log("Incorrect data");
}


//task 7 if else if

let h = new Date().getHours();

if (h>=23 && h<5){
    console.log("Доброй ночи");
} else if (h>=5 && h<11){
    console.log ("Доброе утро");
} else if (h>=11 && h<17){
    console.log("Добрый день");
} else if (h>=17 && h<23){
    console.log("Добрый вечер");
}









