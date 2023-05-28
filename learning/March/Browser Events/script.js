// write js here 

const authur = "Sourav";

// calling the element of html
let btn = document.getElementsByClassName("btn")[0];
let container = document.getElementsByClassName("container")[0];

// creating some elements
let nav = document.createElement("nav");
let navLogo = document.createElement("h2");
let listUl = document.createElement("ul");

// inserting them
nav.appendChild(listUl);
nav.appendChild(navLogo);
container.appendChild(nav);

// creating class name
nav.className = "navbar";
navLogo.className = "nav--logo";
listUl.className = "nav--items";

// inserting html to the ul 
listUl.innerHTML = `
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
`;

navLogo.innerText = `codewith${authur}`.toLocaleLowerCase();



// // adding event to the click and hover
// btn.addEventListener("click", ()=>{
//   alert(authur)
// })

// // container.addEventListener("mouseover", ()=>{
// //   container.style.background = "red";
// // })
// container.addEventListener("mouseenter", ()=>{
//   container.style.background = "tomato";
// })

// container.addEventListener("mouseout", ()=>{
//   container.style.background = "teal"
// })












