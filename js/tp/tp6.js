/*
------------------------------------------------------
TP 6: L'analyseur de nombre
------------------------------------------------------

- Demandez à l'utilisateur un nombre à analyser
- Lui indiquer sur le nombre est pair ou impair
*/

var nombre = Number(prompt("Entrez un nombre:"));

if (nombre % 2 === 0) {
  console.log("Le nombre est pair.")
} else {
  console.log("Le nombre est impair.")
}