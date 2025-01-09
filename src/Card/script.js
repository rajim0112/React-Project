// ***********compile time errors - type errors**************

// console.log("instruct-1")
// console.log("instruct-2")
// console.lag("instruct-2")

// ************run time errors - reference errors**********

// var num = 5;
// console.log(num);
// console.log("instruct-3");

// **********************try, catch, finally******************

// try {
//     console.log(1);
//     console.log('try block');
//     console.log(2);
// } catch {
//     console.log('catch block');
// }
// console.log("instruct-3");

// try {
//     console.log(1);
//     console.lag('try block');
//     console.log(2);
// } catch {
//     console.error('catch block');
// }
// console.log("instruct-3");

// try {
//     console.log(1);
//     console.lag('try block');
//     console.log(2);
// } catch(e) {
//     console.error('catch block:'. e);
// }
// console.log("instruct-3");

// try {
//     const dividend = window.prompt("Enter dividend")
//     const divisor = window.prompt("Enter divisor")
//     // const dividend = 20
//     // const divisor = 0
//     const result = dividend/divisor
//     console.log(result);
// } catch(e) {
//     console.error('catch block:'. e);
// }
// console.log("instruct-3");

// const dividend = 20
// const divisor = 10
// try {
//     if (divisor != 0){
//         const result = dividend/divisor
//         console.log(result);
//     } else {
//         throw new Error("you can't divided by zero")
//     }
// } catch(e) {
//     console.error('catch block:'. e);
// } finally {
//     console.log("finally block");
// }
// console.log("instruct-3");

// *********************todo-list(take bath, breakfast, study)************

// function takeBath() {
//     setTimeout(() => {console.log("Done Bathing")}, 3000)
// }
// function takeBreakFast() {
//     setTimeout(() => {console.log("Had BreakFast")}, 5000)
// }
// function study() {
//     setTimeout(() => {console.log("Done studying")}, 7000)
// }
// takeBath()
// takeBreakFast()
// study()

// function takeBath() {
//     setTimeout(() => {
//         console.log("Done Bathing");
//         takeBreakFast();
//     }, 3000)
// }
// function takeBreakFast() {
//     setTimeout(() => {
//         console.log("Had BreakFast"); 
//         study()
//     }, 5000)
// }
// function study() {
//     setTimeout(() => {
//         console.log("Done studying");
//         console.log('Finished all the tasks')
//     }, 7000)
// }
// takeBath()
// takeBreakFast()
// study()

// const bath = true;
// function takeBath() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("Done bathing");
//             reject("not done bathing");
//         }, 3000)
//     })
// }
// function takeBreakFast() {
//     setTimeout(() => {
//         console.log("Had BreakFast"); 
//         study()
//     }, 5000)
// }
// function study() {
//     setTimeout(() => {
//         console.log("Done studying");
//         console.log('Finished all the tasks')
//     }, 7000)
// }
// takeBath().then(
//     data => console.log(data)
// ).catch(
//     data => console.log(data)
// )
// takeBreakFast()
// study()

const bath = true;
const breakfast = true;
const isStudy = true;
function takeBath() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(bath) {
                resolve("Done bathing");
            } else {
                reject("not done bathing");
            }
        }, 3000)
    })
}
function takeBreakFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(breakfast) {
                resolve("Done eating");
            } else {
                reject("not done eating");
            }
        }, 5000)
    })
}
function study() {
    setTimeout(() => {
        console.log("Done studying");
        console.log('Finished all the tasks')
    }, 7000)
}
takeBath().then(
    data => {
        console.log(data);
        takeBreakFast().then(
            data => {
                console.log(data)
            }
        ).catch (
            rej => {console.log(rej)}
        )
    }
).catch(
    data => console.log(data)
)
takeBreakFast()
study()