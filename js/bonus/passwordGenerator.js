var alphabet = "abcdefghijklmnopqrstuvwxyz";
var passwordLength = Number(prompt("Quelle longueur de mot de passe souhaitez-vous ?"))
var password = "";

for (var i = 0; i < passwordLength; i++) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  password += alphabet[randomIndex];
}

alert("Le mot de passe généré est : " + password);
