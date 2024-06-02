let tabPrenom = ["Pierre", "Paul", "Jacques"];
let tabNombre = [ 1, 4, 7, 9];
let tabIdentite = ["Jean", "Martin", 30, "employé"];

let tabVide =[];

let element = tabPrenom[0];
alert("Le premier élement du tableau tabPrenom est " + element);

alert(tabPrenom);
console.log(tabIdentite);

tabIdentite.push(25, "rue du centre", 75000, "Paris");
console.log(tabIdentite);

tabNombre.splice(2, 2);
console.log(tabNombre);

tabPrenom.pop();
console.log(tabPrenom);