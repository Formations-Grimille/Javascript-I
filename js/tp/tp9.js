var moyenne = prompt("Quelle est votre moyenne ?");
var sport = confirm("Avez-vous du sport ?"); // true / false
var theater = confirm("Avez-vous du théatre ?"); // true / false

if (moyenne >= 12 || (sport || theater)) {
  console.log("Vous êtes admis.");
} else {
  console.log("Vous n'êtes pas admis.");
}