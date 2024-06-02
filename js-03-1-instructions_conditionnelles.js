
// Déclaration des variables
let codeSolde;
let prixArticle;
let prixSolde = 0;

// Entree des données
prixArticle = Number.parseFloat(prompt("Entrer le prix de l'article en € :","" ));
codeSolde = Number.parseFloat(prompt("Entrer le code sole (1 pour -20%, 2 pour -50% et 3 pour -70% :","1"));

// Calcul de prix soldé
if(codeSolde === 1){
    prixSolde = prixArticle - 20/100 * prixArticle;
}else if (codeSolde === 2){
    prixSolde = prixArticle - 50/100 * prixArticle;
}else{
    prixSolde = prixArticle - 70/100 * prixArticle;
}

// Affichage du resultat 
alert("Le prix de l'article soldé est "+prixSolde+"€");
