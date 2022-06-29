
// //simple add program
// let x = 5
// let y = 6
// let z = x + y
// console.log('The Sum of two Numbers is:' + ' ' + z)

// const price1 = 50
// const price2 = 60
// let total = price1 + price2
// console.log('The price of two Goods is:' + ' ' + total)

// let x1 = 15
// let y1 = 6
// console.log(x1 + y1)


// let numb1 = 5 // assign the value 5 to x
// let numb2 = 2 // assign the value 2 to y
// let numb3 = x + y // assign the value 7 to z (5 + 2)
// const personJohn = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// const personBruce = {firstName:"Bruce", lastName:"Doe", age:50, eyeColor:"blue"};
// const personLenin = {firstName:"Lenin", lastName:"Doe", age:50, eyeColor:"blue"};



// console.log("The First Name is:" + ""+ personLenin.firstName + " " + "and his age is:" + personJohn.age)
// console.log("The First Name is:" + ""+ personJohn.firstName)
// console.log("The First Name is:" + ""+ personBruce.firstName)
const person = {
 firstName: "John",
 lastName : "Doe",
 id       : 5566,
 fullName : function() {
   return this.firstName + " " + this.lastName;
 }
};

console.log(person.fullName)