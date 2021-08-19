// let heading = document.querySelector("h1");
// heading.innerHTML = "We're The CAT People";

// let image = document.querySelector("#image");
// image.src = "https://cdn.builtin.com/sites/www.builtin.com/files/styles/og/public/Rover%2520Cat_4_0.jpg";

// let action = document.querySelector(".signIn");
// action.style.backgroundColor = "pink";


// let btn = document.querySelector("#button");
// btn.onclick = function(){
//     btn.innerHTML = "THANKS!"
// }

let modal = document.querySelector(".modal");
let signin = document.querySelector("#signin");

signin.onclick = function(){
    modal.style.display = "block"
}

window.onclick = function(e){
    if (e.target == modal){
        modal.style.display = "none";
    }
}


let menu = document.querySelector("#bar");
let hidden = document.querySelector(".mobileMenu");

menu.onclick = function(){
        hidden.classList.toggle ("show");
}



