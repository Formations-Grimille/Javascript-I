/*
------------------------------------------------------
TP 18: Le panier boutique
------------------------------------------------------

- On dispose d'un site e-commerce et on vous demande de programmer l'ajout et la suppression des articles au panier selon le diagramme décisionnel en annexe (cart.jpeg).
- L'utilisateur ajoute des articles dans son panier tant qu'il n'a pas écrit "fin"
- On affiche le panier, puis l'utilisateur choisi s'il veut supprimer un article, puis ajouter un article, puis rechercher un article
- À la fin, l'utilisateur est envoyé vers la page de paiement (On utilise alert)
*/

var cart = [];
var input;

// -- Etape n°1 : Demander l'article à ajouter tant qu'on a pas écrit "fin" //
do {
  input = prompt("Entrez l'article à ajouter au panier ?");
  cart.push(input);
} while (input !== "fin")

cart.pop(); // Enleve le "fin" de la liste
alert("Votre panier: " + cart);

var shouldDelete = confirm("Voulez-vous supprimer quelque chose du panier ?");

if (shouldDelete) {
  var deleteIndex = Number(prompt("Entrez l'index à supprimer."));

  cart.splice(deleteIndex, 1);
  alert("Votre panier: " + cart);
}

var shouldAdd = confirm("Voulez-vous un article hors de prix ?");

if (shouldAdd) {
  var item = prompt("Quel article hors de prix souhaitez-vous ?");
  cart.unshift(item);
  alert("Votre panier: " + cart);
}

var shouldSearch = confirm("Voulez-vous rechercher un produit dans le panier ?");

if (shouldSearch) {
  var searchItem = prompt("Quel article souhaitez-vous rechercher ?");
  var searchIndex = cart.indexOf(searchItem);

  if (searchIndex === -1) {
    alert("Votre article n'existe pas.");
  } else {
    alert("L'article " + searchItem + " a été trouvé à l'indice " + searchIndex);
  }
}

alert("Vous pouvez procéder au paiement.");

