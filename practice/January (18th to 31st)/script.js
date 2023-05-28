// Array

// // January (18th to 31st)

const theAuthur = "Sourav";

let number = [50, 40, 60, 80, 30];
let friends = ["Rue", "Ratul", "Emon", "Sakib"];

// let toString = number.toString();
// console.log(toString, typeof toString);

// let numberJoin = number.join("A");
// console.log(numberJoin)
// add A to the last of all element
 
// number.pop(); 
// console.log(number);
// delete last number

// let numberPop = number.pop();
// console.log(numberPop);
// return last deleted number

// number.shift();
// console.log(number)
// delete first number

// let numberShift = number.shift();
// console.log(numberShift);
// return first deleted number

// let numberUnshift = number.unshift(100)
// console.log(number)
// add number on the first

// let numberPush = number.push(20)
// console.log(number)
// add number on the last

// delete number[0];
// console.log(number)
// console.log(number.length)
// its doesn't effect arrays length

// let connectArray = friends.concat(number, friends);
// console.log(connectArray);
// connect multiple array togather


// let numbers = [100, 2000, 2, 1, 1000909.99900, 999, 3, 56, 7];
// let numbersSort = numbers.sort();
// console.log(numbersSort)
// sort the numbers

// let numberReverse = number.reverse();
// console.log(numberReverse)

// number.splice(0, 2, 100, 200, 300)
// console.log(number);
// which index to start, how many element to delete, what element to add


// let theDeletedNumber = number.splice(0, 2, 100, 200, 300);
// console.log(theDeletedNumber);


// for(let i =0; i<number.length; i++){
//   console.log(i);
// }

// for(let i of number){
//   console.log(i);
// }

//  for(let i in number){
  // console.log(number)
  // console.log(number[i])
//  }

// number.forEach(element => {
//   console.log( element * element)
//   // first element * the first element and so on
// });


// number.forEach((e)=>{
//   console.log(e * e)
// })


// let stringToArray = Array.from(theAuthur);
// console.log(stringToArray)
// convert srting to array


// let numberMap = number.map((element, index, array)=>{
//   // console.log(element, index, array)
//   // console.log("element -",element+100, "index -",index+100);
// })


// number.unshift("Sourav")
// number.push(100, 90, 10, 4, 1, 8, 10);
// console.log(number);
// let numberFilter = number.filter((x)=>{
//   return x > 50;
// })
// console.log(numberFilter);

let newNumber = [1,2,3,4,5,6,7,8,9]

// let numberReduce = newNumber.reduce((x, y)=>{
//   return x + y;
// })
// console.log(numberReduce)

// let numberReduceFunction = (x,y)=>{
//   return x + y
// }

// let numberReduce = newNumber.reduce(numberReduceFunction);
// console.log(numberReduce)



// input the number to the array that gives the user
// let userInput = prompt("Enter numbers!");
// let userInputNumber = Array.from(userInput);

// console.log(userInputNumber);

// let inputNumber = [00,10, 20, 30, 40, 50];
// let userInput;
// do{
//   userInput = Number.parseInt(prompt("Enter numbers!"));
//   inputNumber.push(userInput);
// } while(userInput != 0)
  
 
// console.log(inputNumber);


// // guess the number from 1 to 10
// let userInput;
// let randomNumber = Math.floor(Math.random() * 3);

// while(userInput != randomNumber){
//   userInput = Number.parseInt(prompt("Enter the number!"));
  
//   if(randomNumber == userInput){
//     alert("congrats");
//     console.log(score);
//   } else {
//     alert("try again"); 
//   }
// }


// console.log(console)
// console.error("this is an error")
// console.warn("This is an warn")
// console.info("this is an info")

// console.assert(1<2)
// console.assert(10<2)
// console.count(100000)
// console.count(100001)

// console.time("baal")
// console.timeEnd("baal")

// console.clear()

// console.time()
// let array = [0,0,01,01,230,91, 381,928]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
//   }
//   console.timeEnd()



// let promptValue = prompt("what is your name ?");
// let confirmValue = confirm("are you sure ?");

// if(!promptValue){
//   alert("Allow me to do so");
// } else {
//   alert(`Okay ${promptValue}`);
// }


// function headeOverTo(){
//   confirm("Are you sure ?");
//   location.href = new URL("https://www.google.com/");
// }






