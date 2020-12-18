////////////////////////////////////////////////////////////////////////////task 1

// function upperCase(str) {
//     if (/^[A-Z]/.test(str)) {
//         console.log("String's not starts with uppercase character ");
//     } else {
//         console.log("String's starts with uppercase character");
//     }
// }

// upperCase("Asdsadsad@d");
// upperCase("sAsAaadsad@d");


////////////////////////////////////////////////////////////////////////////task 2

// function checkEmail(str) {
//     return /^[\w_.]+@[\w_.]+.[\w_.]+$/.test(str);
// }

// checkEmail("Qmail2@gmail.com");


////////////////////////////////////////////////////////////////////////////task 5

// function changeWordsPlace(str) {
//     let regExp3 = / /;
//     let arr = str.split(regExp3);
//     return arr.reverse();
// }

// changeWordsPlace("Java Script");


////////////////////////////////////////////////////////////////////////////task 6

function checkEmail(str) {
    if (/^[A-Za-z0-9]{1}[A-Za-z0-9_]*-?[A-Za-z0-9_]*@[A-Za-z0-9]+\.[A-Za-z0-9]+$/.test(str)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!");
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com'); 


////////////////////////////////////////////////////////////////////////////task 7

// function checkLogin(str) {
//     if (/^[^\d][\w_\.]{1,9}$/.test(str)) {
//         console.log('true');
//         console.log(str.match(/\d+(\.\d+)?/g));
//     } else {
//         console.log('false');
//         console.log(str.match(/\d+(\.\d+)?/g));
//     }
// }