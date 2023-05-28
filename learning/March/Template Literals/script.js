// write js here 

// let item = "sugar";
// let price = 10;
// let tax = 0.05;

// let value = `The price of ${item} without vat is: ${(price - price * tax)}`; 
// console.log(value);



let rapper = document.getElementsByClassName("rapper")[0];

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `
  <h2>${header}</h2><ul>
`;

for(let i of tags){
  html += `<li>${i}</li>`;
}

 html += `</ul>`


rapper.innerHTML = html;






