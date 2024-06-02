// Déclaration des variables
let nombreAnnees; 
let capitalInitial;
let tauxInteret;
let capitalFinal;
let interets;

// Entrées puis conversion des données
capitalInitial = Number.parseFloat(prompt("Enter le capital initial en € : ", "0"));
tauxInteret = Number.parseFloat(prompt("Entrer le taux d'intérêt en % :","0"));
nombreAnnees = Number.parseInt(prompt("Entrer le nombre d'années : ", "0"));
capitalFinal = capitalInitial;
// Calcul des intérêts
for(let i= 1; i<= nombreAnnees; i++){
    capitalFinal = capitalFinal + tauxInteret/100 * capitalFinal;

}
interets = capitalFinal - capitalInitial;
interets= interets.toFixed(2); // affichage avec 2 décimales

// Affichage du résultat
alert("Les intérêts acquis au bout de "+nombreAnnees+" années sont de "+interets+" €.");
