/*
------------------------------------------------------
TP 4: Inverser le nom et le prénom
------------------------------------------------------

- Ajouter des variables pour le nom, le prénom et l'âge de l'utilisateur du programme.
- Afficher les informations de l'utilisateur dans la console.
*/

// Écrit par Mickaël Dhainaut, le 20/04/23
var firstname = prompt("Quel est votre prénom ?");
var lastname = prompt("Quel est votre nom ?");
var age = prompt("Quel est votre age ?");
var firstnameTmp = firstname; // On duplique le contenu de firstname dans firstnameTmp

firstname = lastname; // On écrase le contenu de firstname par une copie du lastname
lastname = firstnameTmp; // On écrase le contenu de lastname par une copie du firstnameTmp

// Affiche mon nom prénom.
console.log("Bonjour je m'appelle " + firstname + " " + lastname +".");
console.log("J'ai " + age + " ans.");