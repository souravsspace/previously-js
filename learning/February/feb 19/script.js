// insertion methods


// let divElement = document.getElementsByTagName("div")[0];

// let createElementDiv = document.createElement("div");
// createElementDiv.innerHTML = "<a>click me</a>";

// divElement.appendChild(createElementDiv)
// // add the created element to the div
// divElement.append(createElementDiv)
// divElement.prepend(createElementDiv)
// divElement.before(createElementDiv)
// divElement.after(createElementDiv)
// divElement.replaceWith(createElementDiv);




// insertAdjacentHTML, insertAdjacentElement and insertAdjacentText


let middleFirst = document.getElementById("middleFirst");

// middleFirst.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');
// middleFirst.insertAdjacentHTML('beforeend', '<p>beforeend</p>');
// middleFirst.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>');
// middleFirst.insertAdjacentHTML('afterend', '<p>afterend</p>');


// middleFirst.remove()
// remove any element




// Changing HTML Classes using JavaScript: className and classList


// middleFirst.className = "tomato-red font-size-20-br-10 padd-5";
// // exicute class directly
// // add multiple class

// // middleFirst.classList
// console.log(middleFirst.classList);
// // see the list of the class

// middleFirst.classList.remove("font-size-20-br-10");
// // remove any class using it

// middleFirst.classList.add("font-size-20-br-10");
// // add any class using it

// middleFirst.classList.toggle("font-size-20-br-10");
// // true = flase
// middleFirst.classList.toggle("font-size-20-br-10");
// // flase = true

// // middleFirst.classList.contains("font-size-20-br-10");
// console.log(middleFirst.classList.contains("font-size-20-br-10"));
// // true or false




// setInterval and setTimeout


// alert("hey, Sourav")

// let timeOut = setTimeout(function(){
//   // alert("showed after 2000ms")
// }, 2000);

// console.log(timeOut);
// // clearTimeout(timeOut);



// let b = prompt("run the timeout function ?");

// if ("y" == b){
//   alert("showed after 10000ms")
// } else {
//   clearTimeout(timeOut);
// }