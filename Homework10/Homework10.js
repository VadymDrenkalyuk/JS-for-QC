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

function calcArrProduct(arr) {
    return new Promise(function (resolve, reject) {
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof (arr[i]) === 'number') {
                result *= arr[i];
            } else {
                result = undefined;
            }
        }

        if (isNaN(result)) {
            let reason = new Error("Error! Incorrect array!");
            reject(reason.message);
        } else {
            resolve(result);
        }
    });
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).catch(result => console.log(result));


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

