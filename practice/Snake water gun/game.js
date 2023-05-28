
// wrong game code
let myScores = 0;
let i = 0;

while(i < 10){


      // values 
    let s = "s";
    let w = "w";
    let g = "g";

    // the value user input
    let gamePr = prompt("Enter - S, W & G");


    // the value of computer output
    let ranArr = ["Snake", "Water", "Gun"];
    let computerChoose = ranArr[Math.floor(Math.random() * ranArr.length)];


    if(gamePr == s && computerChoose == ranArr[0]){
      alert("Congrats !");
      myScores++;
    } else if(gamePr == w && computerChoose == ranArr[1])  {
      alert("Congrats !");
      myScores+1;
    } else if(gamePr == g && computerChoose == ranArr[2]){
      myScores+1;
      alert("Congrats !");
    } else {
      alert("Better luck next time!");
    }

  i++;
}


alert(myScores);














