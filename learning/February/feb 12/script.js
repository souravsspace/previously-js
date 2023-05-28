// write js here 


let container = document.getElementsByClassName("container")[0];
// container.innerHTML = container.innerHTML + "<h2>Hello Sourav</h2>";



for(let i = 0; i<=10; i++){
  let newDiv = document.createElement("div");
  // console.log(i)
  // i++;
  newDiv.innerHTML = "<h3>Hello world!</h3>";
  container.appendChild(newDiv)
}

