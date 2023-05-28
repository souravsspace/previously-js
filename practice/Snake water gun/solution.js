// game function
const match = (cpu, user)=>{

  if(cpu === user){
    return "Nobody! the match is draw!"
  } 
  else if(cpu === "S" && user === "W"){
    return "cpu"
  } 
  else if(cpu === "S" && user === "G"){
    return "user"
  } 
  else if(cpu === "G" && user === "W"){
    return "user"
  } 
  else if(cpu === "G" && user === "S"){
    return "cpu"
  } 
  else if(cpu === "W" && user === "S"){
    return "user"
  }
  else if(cpu === "W" && user === "G"){
    return "cpu"
  }

}

let user = prompt("Enter S, W & G").toUpperCase();
let cpuInput = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuInput];
let result = match(cpu, user);



document.write(`User : ${user} <br> Cpu : ${cpu} <br> The winner is :  ${result}`);
// in document.write 
// cant do \n for line break ! use html





