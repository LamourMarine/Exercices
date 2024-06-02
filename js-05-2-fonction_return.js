function calculPrixSolde(prixArticle, tauxSolde){
    let prixSolde = 0;
    prixSolde =(1 - tauxSolde/100) * prixArticle;
    return prixSolde;
}

let prixArticle;
let tauxSolde;

prixArticle = Number.parseFloat(prompt("Entrer le prix de l'article en € : ","0"));
tauxSolde = Number.parseFloat(prompt("Entrer le pourcentage de réduction : ","0"));

let prix = calculPrixSolde(prixArticle, tauxSolde);
alert("Le prix de l'article soldé est "+prix+ " €.");
