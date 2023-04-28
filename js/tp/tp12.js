/*
------------------------------------------------------
TP 12 : Retour à l'école
------------------------------------------------------

- Demander à l'utilisateur d'indiquer la table de multiplication qu'il souhaite.
- Afficher la table de multiplication de 0 à 10
*/

var table = Number(prompt("Quelle table de multiplication souhaitez-vous ?"));

console.log("--------");
console.log("Table de ", table);
console.log("--------");

for ( var i = 0; i <= 10; i++) {
  console.log(i + " x " + table + " = " + i * table);
}