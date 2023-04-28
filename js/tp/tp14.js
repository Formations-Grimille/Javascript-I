/*
------------------------------------------------------
TP 14: Erreur de saisie
------------------------------------------------------

- Écrire un programme qui demande à l'utilisateur d'entrer un nombre jusqu'à ce que la saisie soit comprise entre 1 et 3
- Afficher "Saisie correcte" quand la saisie est correcte
*/


// Solution 1
var number = Number(prompt("Saisir un nombre entre 1 et 3"));

while(number < 1 || number > 3) {
  console.log("Saisie incorrecte.");
  number = Number(prompt("Saisir un nombre entre 1 et 3"));
}
console.log("Saisie correcte.");

// Solution 2
do {
  number = Number(prompt("Saisir un nombre entre 1 et 3"));
} while (number < 1 || number > 3);

console.log("Saisie correcte.");

// La solution 2 est meilleure que la solution 1 car pas de répétition du code.