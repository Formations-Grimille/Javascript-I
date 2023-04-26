alert("Joueur 1 va indiquer un prix.");

var price = Number(prompt("Quel est le prix à cacher ?"));

alert("Joueur 2 va commencer à jouer");

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