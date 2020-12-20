// task1

// function getPromise(message, delay) {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
//     return promise;
// }



// getPromise("test promise", 2000).then(function (data) {
//     console.log(data);
// });


//task 2

let arr = [1, 2, 3]
function calcArrProduct(arr) {
    
    return new Promise(function (resolve, reject) {
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof (i) === 'number') {
                result *= i;
                } else{
                reject ("Error");
            }
            resolve (result);
        }
    });
}

//task 3

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// function showNumbers() {
//   let promise = Promise.resolve();
//   let timeout = Math.random() * 3000;
//   for (let i = 1; i <= 10; i++) {
//     promise = promise.then(
//         () => delay(i, timeout).then(console.log));
//   }
// }

// showNumbers();



//task 4

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// async function showNumbers() {
//     for (let i = 0; i <= 10; i++) {
//         let timeout = Math.random() * 3000;
//         await delay(i, timeout).then((result) => console.log(result));
//     }
// }

// showNumbers(); 

