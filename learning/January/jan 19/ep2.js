
// array map method

let numbers = [70, 40, 80, 90, 50, 60, 30, 20, 10];

// let mapArr = numbers.map((element, index, array)=>{
//   console.log(element, index, array);
//   return element+5;
// });

// console.log(mapArr);




// array filter method

numbers.push(1,6,7,4,3,9); // inserting some more numbers

let filterArray = numbers.filter((n)=>{
  return n <= 50;
});

// console.log(filterArray)


 

// array reduce method

let numArr = [1,2,3,4,5];

// first way
let reduceArr = numArr.reduce((a, b)=>{
  return a + b;
  // it sums 1 + 2 = 3
  // then 3 + 3 = 6
  // again 6 + 4 = 10
  // again 10 + 5 = 15
});
// console.log(reduceArr)



// 2nd way
const reduceArray = (a, b)=> {
  return a + b;
}

let reArray = numArr.reduce(reduceArray);

// console.log(reArray)













