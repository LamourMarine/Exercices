const cvs = document.getElementById("zone_de_dessin");
cvs.width = 400;
cvs.height = 200;
cvs.style.border = "2px solid";

const ctx = cvs.getContext("2d");

const image = new Image();
image.src = "js-09-image.jpg.jpg";

ctx.drawImage(image, 100, 100);




