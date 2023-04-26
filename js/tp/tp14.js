// While
var number = Number(prompt("Saisir un nombre entre 1 et 3"));

while(number < 1 || number > 3) {
  console.log("Saisie incorrecte.");
  number = Number(prompt("Saisir un nombre entre 1 et 3"));
}
console.log("Saisie correcte.");



// Do while

do {
  number = Number(prompt("Saisir un nombre entre 1 et 3"));
} while (number < 1 || number > 3);

console.log("Saisie correcte.");