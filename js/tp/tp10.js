/*
------------------------------------------------------
TP 10: Le site un peu spécial
------------------------------------------------------

- Demander à l'utilisateur d'indiquer son âge
- Lui indiquer s'il peut accéder au site
*/

var isAdult = confirm("Avez-vous plus de 18 ans ?");

if (isAdult) {
  console.log("Bienvenue dans un site un peu spécial");
} else {
  console.log("Retourne sur Minecraft.");
}