/*
------------------------------------------------------
TP Bonus : Générer des mots de passe
------------------------------------------------------

- Demander la longueur du mot de passe à l'utilisateur
- Lui donner le mot de passe généré
- Bonus du bonus : Ajouter des caractères spéciaux et majuscules au générateur.
*/


var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/$%:.;?,!@";
var passwordLength = Number(prompt("Quelle longueur de mot de passe souhaitez-vous ?"))
var password = "";

for (var i = 0; i < passwordLength; i++) {
  let randomIndex = Math.floor(Math.random() * alphabet.length);
  password += alphabet[randomIndex];
}

alert("Le mot de passe généré est : " + password);
