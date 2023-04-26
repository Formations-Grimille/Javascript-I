let age = prompt("Quel est votre âge ?");
let nationalite = prompt("Quelle est votre nationalité ?");

if (age >= 18 && nationalite === "française") {
  console.log("Vous êtes éligible pour voter en France");
} else {
  console.log("Vous n'êtes pas éligible pour voter en France");
}