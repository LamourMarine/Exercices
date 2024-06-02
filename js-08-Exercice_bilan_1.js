let nombreDeComptes = 0;
tabClients = [];
tabCompteCourant = [];
tabCompteEpargne = [];

// Partie1 : crétaion des comptes bancaires
nombreDeComptes = Number.parseInt(prompt("Combien de comptes faut-il créer?", "0"));
for(let numeroCompte = 0; numeroCompte < nombreDeComptes; numeroCompte++){
    tabClients[numeroCompte] = prompt("Entrer le nom du client ayant pour numéro de compte ",+numeroCompte+" : ");
    tabCompteCourant[numeroCompte] = Number.parseFloat(prompt("Entrer le solde du compte courant : ","0"));
    tabCompteEpargne[numeroCompte] = Number.parseFloat(prompt("Entrer le solde du compte épargne : ", "0"));
}

// Affichage des comptes bancaires
for(let numeroCompte = 0; numeroCompte < nombreDeComptes; numeroCompte++){
    document.write("Compte bancaire numéro "+numeroCompte+" de "+tabClients[numeroCompte]+".<br/>");
    document.write("Solde du comte courant de "+tabClients[numeroCompte]+" : "+tabCompteCourant[numeroCompte]+"€.<br/>");
    document.write("Solde du compte épargne de "+tabClients[numeroCompte]+" : "+tabCompteEpargne[numeroCompte]+"€.<br/>");

}

// Partie 2 : retrait sur le compte courant
function soldeApresRetrait(solde, montantRetrait){
    let soldeApresRetrait = solde;
    if(montantRetrait <= solde){
        soldeApresRetrait = soldeApresRetrait - montantRetrait;
        alert("Retrait accepté. Il vous reste "+soldeApresRetrait+" € sur le compte courant. ");
    }else{
        alert("Retrait impossible. Il vous reste "+soldeApresRetrait+ "€ sur le compte courant.");
    } 
    return soldeApresRetrait;
}

alert("Retrait sur le compte courant.");
let numeroCompte = prompt("Veuillez entrer votre numéro de compte :","0");
let montantRetrait = Number.parseFloat(prompt("Bonjour "+tabClients[numeroCompte]+". Veuillez entrer le montant du retrait souhaité :" , "0"));
tabCompteCourant[numeroCompte]= soldeApresRetrait(tabCompteCourant[numeroCompte], montantRetrait);

// Affichage des comptes bancaires
for(let numeroCompte = 0; numeroCompte < nombreDeComptes; numeroCompte++){
    document.write("Compte bancaire numéro "+numeroCompte+" de "+tabClients[numeroCompte]+".<br/>");
    document.write("Solde du comte courant de "+tabClients[numeroCompte]+" : "+tabCompteCourant[numeroCompte]+"€.<br/>");
    document.write("Solde du compte épargne de "+tabClients[numeroCompte]+" : "+tabCompteEpargne[numeroCompte]+"€.<br/>");

}