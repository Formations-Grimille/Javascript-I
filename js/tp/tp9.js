/*
------------------------------------------------------
TP 9: Le bac pour les nuls
------------------------------------------------------

- Demander à l'utilisateur d'indiquer sa moyenne au bac
- Lui demander si oui ou non il fait du sport
- Lui demander si oui ou non il fait du théatre
- Lui indiquer qu'il a son bac s'il a au moins 12 ou s'il a au moins fait une activité extra scolaire
*/

var moyenne = prompt("Quelle est votre moyenne ?");
var sport = confirm("Avez-vous du sport ?"); // true / false
var theater = confirm("Avez-vous du théatre ?"); // true / false

if (moyenne >= 12 || (sport || theater)) {
  console.log("Vous êtes admis.");
} else {
  console.log("Vous n'êtes pas admis.");
}