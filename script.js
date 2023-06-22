let risultatoGiocatoreElement = document.getElementById("risultatoGiocatore");
let risultatoComputerElement = document.getElementById("risultatoComputer");
let vincitoreElement = document.getElementById("vincitore");
let giocaBtn = document.getElementById("gioca");

giocaBtn.addEventListener("click", function () {
    let risultatoGiocatore = generaNumeroRandom(1, 6);
    let risultatoComputer = generaNumeroRandom(1, 6);

    risultatoGiocatoreElement.innerText = "Giocatore: " + risultatoGiocatore;
    risultatoComputerElement.innerText = "Computer: " + risultatoComputer;

    if (risultatoGiocatore > risultatoComputer) {
        vincitoreElement.innerText = "Il giocatore vince!";
    } else if (risultatoGiocatore < risultatoComputer) {
        vincitoreElement.innerText = "Il computer vince!";
    } else {
        vincitoreElement.innerText = "Pareggio!";
    }
});

function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}