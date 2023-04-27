/*
------------------------------------------------------
TP 3: Dynamiser notre programme - Partie 2
------------------------------------------------------

- Ajouter des variables pour le nom, le prénom et l'âge de l'utilisateur du programme.
- Afficher les informations de l'utilisateur dans la console.
*/

// Écrit par Mickaël Dhainaut, le 20/04/23
var firstname = prompt("Quel est votre prénom ?");
var lastname = prompt("Quel est votre nom ?");
var age = prompt("Quel est votre age ?");

// Affiche mon nom prénom.
console.log("Bonjour je m'appelle " + firstname + " " + lastname +".");
console.log("J'ai " + age + " ans.");