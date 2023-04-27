/*
------------------------------------------------------
TP 8: La nationalité
------------------------------------------------------

- Demander à l'utilisateur d'indiquer son âge et sa nationalité
- Lui indiquer s'il peut voter en France.
*/

var age = prompt("Quel est votre âge ?");
var nationalite = prompt("Quelle est votre nationalité ?");

if (age >= 18 && nationalite === "française") {
  console.log("Vous êtes éligible pour voter en France");
} else {
  console.log("Vous n'êtes pas éligible pour voter en France");
}