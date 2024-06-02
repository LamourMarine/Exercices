let nombreEssais = 0;
let motDePasse ="";

do{
    nombreEssais++;
    motDePasse = prompt("Entrer le mot de passe","");
}while(motDePasse!== "Sesame" && nombreEssais < 3);

if(motDePasse  ==="Sesame"){
    document.write("Merci. Vous pouvez entrer");

}else{
    document.write("Vous n'ètes pas autorisé à entrer.");
}

//Compléments 
console.log("Le mot de passe comporte " + motDePasse.length+ "caractères.");
console.log("La première lettre du mot de passe est "+motDePasse.charAt(0));
console.log("Le premier s du mt de passe en partant de 1 est en position "+motDePasse.indexOf("s", 1));
console.log("Les trois premiers caractères de motDePasse sont "+motDePasse.substring(0,3));
console.log("Mot de passe en majuscules "+motDePasse.toUpperCase());
console.log("Mot de passe en minuscules "+motDePasse.toLocaleLowerCase());