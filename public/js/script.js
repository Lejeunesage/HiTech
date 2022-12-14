/********** Formulaire de connexion ***********/

let svg = document.querySelector(".svg");
let mybtn = document.querySelector("button.user");

function affirst() {
    document.querySelector(".form").style = "display: block";
}

function displaynone1() {
    document.querySelector(".form").style = "display: none";
}

mybtn.addEventListener("click", function(e){
    e.preventDefault();
    affirst()});
svg.addEventListener("click", function(e){
    e.preventDefault();
    displaynone1()});