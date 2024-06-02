// Ce programme calcule le quotient de deux entiers entrés par l'utilisateur

// Déclaration des variables
let dividende;
let diviseur;
let quotient = 0;

console.log(dividende);

dividende = Number.parseInt(prompt("Entrer le dividende entier", "0"));
diviseur = Number.parseInt(prompt("Entrer le diviseur entier","1"));
quotient = dividende / diviseur;

alert("le quotient est "+quotient+".");

console.log("le quoitient est "+quotient+".");
console.log(`le quoitient est ${quotient}.`);