
// Array Methods

// arr delete operator 
let numbers = [40, 60, 50, 30];
let friends = ["Rue", "Ratul", "Emon", "Sakib"];

// delete numbers[0] // its doesn't effect arrays length
// console.log(numbers)



// concat to add 2 arr or more togather

let concatArr = friends.concat(numbers, friends, numbers, numbers, friends);

// console.log(concatArr)
// console.log(numbers, friends)



// sort arr modify the orginal arr

// const compare = (a, b)=> {
//   return a - b;
// }

// numbers = [100, 19927377.19, 200, 2, 29, 900000, 1111111111111, 5, 7, 8,]
// let sortArr = numbers.sort(compare); 
// // let sortArr = numbers.sort(); 
// // sort like (a-z) also if it a number

// console.log(sortArr)




// reverse arr

// let reverseArr = numbers.reverse();

// console.log(reverseArr)



// splice and slice arr

numbers.splice(1, 2, 101, 102, 102, 104);
// which index to start
// how many to remove 
// what to add?

// console.log(numbers)


// let spliceDelVal = numbers.splice(1, 2, 101, 102, 102, 104);
// console.log(spliceDelVal)













