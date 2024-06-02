// Déclaration des variables
let nombreAnnees = 0; 
let capitalInitial;
let tauxInteret;
let capitalFinal;
let interets;

// Entrées puis conversion des données
capitalInitial = Number.parseFloat(prompt("Enter le capital initial en € : ", "0"));
tauxInteret = Number.parseFloat(prompt("Entrer le taux d'intérêt en % :","0"));
interets = Number.parseFloat(prompt("Entrer le gain souhaité en € : ","0"));
capitalFinal = capitalInitial;
// Calcul des intérêts
while(capitalFinal - capitalInitial < interets){
    capitalFinal = capitalFinal + tauxInteret/100 * capitalFinal;
    nombreAnnees++;
}

// Affichage du résultat
alert("Le gain de "+interets+" € est acquis au bout de "+nombreAnnees+" années.");
