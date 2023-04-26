var shoppingCart = [];
var product = "";
var alertCartMsg = "";
while (product !== "fin") {
  product = prompt("Ajoutez un élément à votre panier (tapez 'fin' pour arrêter) :");
  if (product !== "fin") {
    shoppingCart.push(product);
  }
}


for (var i = 0; i < shoppingCart.length; i++) {
  alertCartMsg += shoppingCart[i] + ", ";
}
alert("Contenu du panier :" + alertCartMsg);

var shouldDelete = confirm("Voulez-vous supprimer un élément du panier ?");

if (shouldDelete) {
  let deleteIndex = prompt("Entrez l'index de l'élément à supprimer :");

  shoppingCart.splice(deleteIndex, 1);

  alertCartMsg = "";
  for (var i = 0; i < shoppingCart.length; i++) {
    alertCartMsg += shoppingCart[i] + ", ";
  }

  alert("Contenu du panier :" + alertCartMsg);
}

var shouldAdd = confirm("Voulez-vous ajouter un produit super cher mais qui vous fait rêver quand même ?");

if (shouldAdd) {
  var newProduct  = prompt("Parfait, quel produit hors de prix souhaitez-vous ?");

  shoppingCart.unshift(newProduct);

  alertCartMsg += shoppingCart[i] + ", ";
  alertCartMsg = "";
  for (var i = 0; i < shoppingCart.length; i++) {
    alertCartMsg += shoppingCart[i] + ", ";
  }

  alert("Contenu du panier :" + alertCartMsg);
}

var shouldSearch = confirm("Voulez-vous rechercher un article dans votre panier ?")

if (shouldSearch) {
  var search = prompt("Recherchez un élément dans votre liste de courses :");
  var searchIndex = shoppingCart.indexOf(search);
  
  if (searchIndex !== -1) {
    alert(`L'élément "${search}" a été trouvé à l'index ${searchIndex}.`);
  } else {
    alert(`L'élément "${search}" n'a pas été trouvé dans la liste de courses.`);
  }
}

alert("Vous pouvez procéder au paiement.");