
window.console.log(window);
console.log(document);
console.log(document.body);

document.body.style.background = "#222";
document.body.style.fontFamily = "serif";


let goPage = confirm("Are you sure ?");

if(!goPage){
  document.write("Bye for now!!")
} else {
  location.href = "https://google.com";
// redirect to any websites 
}


 

 