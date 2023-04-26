var answer;
do {
  answer = prompt("Quelle est la couleur du cheval blanc d'Henri IV ?");
} while (!(answer === 'a' || answer === 'b' || answer === 'c' || answer === 'd'))

if (answer === 'b') {
  console.log("Bonne réponse ...");
} else {
  console.log("t'es nul");
}
