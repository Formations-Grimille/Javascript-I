/*
------------------------------------------------------
TP 16: Jeu : Le juste prix
------------------------------------------------------

- Écrire un programme "Le juste prix"
- Joueur 1 cache un prix
- Joueur 2 essaie de trouver le prix
- Tant que le joueur 2 n'a pas trouvé le juste prix, le programme indique à joueur 2 si le prix caché par joueur 1 est plus grand ou plus petit que le prix qu'il a essayé.
- À la fin de la partie, le programme indique le nombre de coups du joueur 2.
*/

alert("Joueur 1 va indiquer un prix.");

var price = Number(prompt("Quel est le prix a cacher ?"));

alert("Joueur 2 va commencer à jouer.");

var attempt = 0;
var input;

do {
  attempt++;
  input = Number(prompt("Essai n° "+ attempt +" du joueur 2:"));

  if (price < input) {
    alert("Le prix est moins elevé.");
  } else if (price > input) {
    alert("Le prix est plus elevé.")
  }
} while (input !== price);

alert("Bravo ! Vous avez trouvé le prix en " + attempt + " coups !");