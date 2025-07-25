//setting vars

let start = document.getElementById("start");
let nome = document.getElementById("nome");
let name = document.getElementById("name");
let second = document.getElementById("Secondform");


//Functions

const createForm = () => {
    yourName = name.value;

    second.style.display = "flex";
    nome.innerHTML = `Olá, ${yourName}.`;
    



};


//events

start.addEventListener("click",createForm);