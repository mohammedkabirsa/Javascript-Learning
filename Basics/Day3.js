//Promise
//Pending
//Fullfilled
//Rejected

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success')
//   }, 1000)//Fullfilled Promise
// })

// // const p1 = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     reject('Failiure')
// //   }, 1000) //Rejected Promise
// // })

// // p1.then(console.log).catch(console.log)

// // Promises are Created to replace Call backs

// //What is Call Back.?
// // const f1 = (val, callback) => {
// //   return callback(val + 10)
// // }
// // const callback1 = (val) => {
// //   return val + 20
// // }

// // // console.log(f1(1, callback1))
// // console.log(f1(2, callback1))

// const p1 = (val) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(val + 10)
//     }, 1000) //Fullfilled Promise
//   })
// p1(1)
//   .then((x) => x + 20)
//   .then(console.log)

/**********************************************DAY #3********************************************/
// var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve('hello world')
//   }, 2000)
// })

// promise.then(function (data) {
//   console.log(data)
// })

/***************Sample program*******************/
const count = true

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve('There is a count value.')
  } else {
    reject('There is no count value')
  }
})

console.log(countValue)

// https://www.programiz.com/javascript/promise

// returns a promise

/***************************CHaining a Promise**********************/

let countValue = new Promise(function (resolve, reject) {
  resolve('Promise resolved')
})

// executes when promise is resolved successfully

countValue
  .then(function successValue(result) {
    console.log(result)
  })

  .then(function successValue1() {
    console.log('You can call multiple functions this way.')
  })
