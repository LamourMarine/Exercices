const cvs = document.getElementById("zone_de_dessin");
cvs.width = 400;
cvs.height = 200;
cvs.style.border = "2px solid";

const ctx = cvs.getContext("2d");

ctx.strokeStyle = "blue"; // couleur du contour
ctx.strokeRect(100, 150, 200, 30); //rectangle vide

ctx.fillStyle = "#ff0000"; //couleur de remplissage
ctx.fillRect(140, 30, 100, 50); //rectangle plein

// Dessin d'un polygone plein
ctx.beginPath();
ctx.moveTo(275, 50);
ctx.lineTo(300, 75);
ctx.lineTo(350, 125);
ctx.lineTo(300, 25);
ctx.lineTo(275, 50);
ctx.fillStyle = "brown";
ctx.fill();


//Dessin avec des arcs de cercle
ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Cercle extérieur 
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Bouche (sens horaire)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Oeil gauche
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); //Oeil droit
ctx.strokeStyle = "purple";
ctx.stroke();

//Texte creux
ctx.font = "bold 20px Verdana, serif";
ctx.strokeStyle = "gold";
ctx.strokeText("Texte creux", 135, 170);

// Texte plein
ctx.font = "italic 20px Arial, serfi";
ctx.fillStyle ="green";
ctx.fillText("Texte plein", 225, 120);



