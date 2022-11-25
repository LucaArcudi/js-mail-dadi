// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?



// DICE GAME

// let button = document.querySelector("a.btn");
// button.addEventListener("click", function (){
//     let userPickedNumber = Math.floor(Math.random() * 6 + 1);
//     document.querySelector("pre.user-number").innerHTML = `Il tuo numero: ${userPickedNumber}`;

//     let pcPickedNumber = Math.floor(Math.random() * 6 + 1);
//     document.querySelector("pre.pc-number").innerHTML = `Il tuo numero: ${userPickedNumber}`;

//     if (userPickedNumber > pcPickedNumber){
//         document.getElementById("output").innerHTML = "Risultato: hai vinto!";
//     }       else if (userPickedNumber == pcPickedNumber){
//         document.getElementById("output").innerHTML = "Risultato: pareggio!";
//     }       else {
//         document.getElementById("output").innerHTML = "Risultato: hai perso!";
//     }
// });



// EMAIL CHECKER

let userEmailElement = document.getElementById("email");
let emails = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];

let button = document.querySelector("a.btn");
button.addEventListener("click", function (){
    let userEmailValue = userEmailElement.value;

    let check = -1;

    for (let i = 0; i < emails.length; i++){
        if (userEmailValue == emails[i]){
            check = i
        } 
    }

    if (check >= 0) {
    document.getElementById("output").innerHTML = `The email: ${userEmailValue} is already existing.`;
}   else {
    document.getElementById("output").innerHTML = `The email: ${userEmailValue} is available.`;
}
});