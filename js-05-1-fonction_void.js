// Déclaration de la fonction
function calculeAffichePrixSolde(prixArticle, tauxSolde){
    let prixSolde = 0;
    prixSolde = (1 - tauxSolde/100) * prixArticle;
alert("le prix de l'article soldé est "+prixSolde+" €.");
}

let prixArticle;
let tauxSolde;

prixArticle = Number.parseFloat(prompt("Entrer le prix de l'article en € : ", "0"));
tauxSolde = Number.parseFloat(prompt("Entrer le pourcentage de réduction : ", "0"));

// Appel de la fonction
calculeAffichePrixSolde(prixArticle, tauxSolde);
