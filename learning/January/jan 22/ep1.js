
// my way of solving the question
// guess the number from 1 to 10

let randomNumber = Number.parseInt(Math.random() * 100);
let guessNumber;
let changes = 0;

console.log(randomNumber);


while(guessNumber != randomNumber && changes <= 100){
  guessNumber = Number.parseInt(prompt("Guess the number..."));
  changes++;

  if (guessNumber == randomNumber) {
  console.log("Congrats!\nYour score is " + (100 - changes));
} else if (guessNumber != randomNumber && guessNumber < randomNumber) {
  console.log("The number is getter then it");
} else if (guessNumber != randomNumber && guessNumber > randomNumber) {
  console.log("The number is lower then it");
};
};





