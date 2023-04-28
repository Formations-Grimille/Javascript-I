/*
------------------------------------------------------
TP 15: Le cheval blanc d'Henry IV
------------------------------------------------------

- Écrire un programme qui demande à l'utilisateur d'entrer la réponse (a,b,c,d) à la question : "Quelle est la couleur du cheval blanc d'Henry IV ?"
- Si la réponse n'est pas une réponse valide, continuer à poser la question.
- Si la réponse est correcte, afficher "Vous gagnez une voiture et 10 000€
- Si la réponse est incorrecte, afficher la bonne réponse.
*/

var answer;
do {
  answer = prompt("Quelle est la couleur du cheval blanc d'Henri IV ?");
} while (!(answer === 'a' || answer === 'b' || answer === 'c' || answer === 'd')) // Attention ici, on veut une réponse valide (soit a OU soit b OU soit c ou soit d), peut importe si la réponse est correcte ou non. Pour que la boucle continue si on a entré une réponse invalide, on inverse le tout

if (answer === 'b') {
  console.log("Vous gagnez une voiture et 10 000€.");
} else {
  console.log("t'es nul");
}
