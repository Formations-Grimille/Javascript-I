# Les conditions

Un programme va être une suite d'instructions logique. Nous allons donc pouvoir executer du code si certaines conditions sont respectées. Par exemple, si l'utilisateur est adulte, si l'utilisateur est abonné, s'il a payé son article ... etc.

## if / else if / else


### Le If
La première condition va être l'instruction "if". if va permettre d'executer le code voulu __SI__ la condition fournie est respectée.

Par exemple :

```js
var age = 29;

if (age >= 18) {
  console.log("Vous êtes un adulte !"); // Affiche "Vous êtes un adulte", si l'age est plus grand que 18
}
```

### Le else

Un if n'est pas nécessairement suivi d'autre chose. Mais on peut vouloir exécuter quelque chose si la condition n'est pas remplie. Pour cela on utilise l'instruction "else" (__SINON__).

Par exemple : 

```js
var age = 29;

if (age >= 18) {
  console.log("Vous êtes un adulte !"); // Affiche "Vous êtes un adulte", si l'age est plus grand que 18
} else {
  console.log("Vous êtes encore un enfant. 👶"); // Affiche "Vous êtes encore un enfant", su l'âge est plus petit que 18
}
```

### Le else if

Il peut arriver d'avoir des cas où l'on souhaite affiner les conditions (tout n'est pas tout blanc ou tout noir vous savez...:D).
Dans ce cas là, nous utiliserons l'instruction "else if" (__SINON SI__).

Par exemple :

```js
var age = 29;

if (age >= 18) {
  console.log("Vous êtes un adulte !"); // Affiche "Vous êtes un adulte", si l'age est plus grand que 18
} else if (age >= 13){
  console.log("Vous êtes un ado !"); // Affiche "Vous êtes un ado", si l'âge est plus grand que 13, mais plus petit que 18
} else {
  console.log("Vous êtes encore un enfant. 👶"); // Affiche "Vous êtes encore un enfant", su l'âge est plus petit que 18
}
```

## Le cas par cas

Si l'on souhaite aller plus loin dans l'affinage (et ici on ne parle pas de fromage), on peut utiliser une instruction qui fera du cas par cas. Il s'agit de l'instruction "switch ... case".

Par exemple : 

```js
var animal = "Chien";

switch (animal) {
  case "Chat":
    console.log("Miaou, nourris-moi humain.");
  break;
  case "Chien":
    console.log("Wouf wouf 🐶");
  break;
  case "Cheval":
    console.log("Patacloc, patacloc");
  break;
  case "Vache":
    console.log("Mmmmmmmeuuuuuuuuuuuuuuuuuuuuuuuhhhhhhhhhhhhhhh!!!!");
  break;
  case "Araignée":
    console.log("Wsh, ça fait quel bruit une araignée ??");
  break;
  default:
    console.log("Animal non trouvé ! :emoticone_triste:")
}
```

Le resultat du code-ci dessus est "Wouf wouf 🐶".

## Les conditions ternaires

Lors de l'initialisation d'une variable, il est possible de changer la valeur d'initialisation selon une condition donnée.
Par exemple : 

```js
var age = 29;
var isAdult = age >= 18;
var role = isAdult ? "Adulte" : "Enfant"; // Si isAdult est vrai, alors role vaudra "Adulte", sinon "Enfant"
```

Ce cas est pratique et permet d'économiser des lignes de code. Cela equivaudrait à écrire : 

```js
var age = 29;
var isAdult = age >= 18;
var role;

if (isAdult) {
  role = "Adulte";
} else {
  role = "Enfant";
}
// C'est super long :(
```

**Attention néanmoins à ne pas écrire des conditions ternaires trop longues ou imbriquées (du ternaire dans du ternaire) au détriment de la lecture du code. C'est vos collègues qui vont gueuler après...**

## Les condition composées et les opérateurs logiques

Il existe deux opérateurs logiques en Javascript. Le __ET__ et le __OU__.
Ces opérateurs logiques peuvent être utilisés pour lier des conditions entre elles.

Par exemple.

```js
var isAdult = age >= 18;
var isPremium = true;

if (isAdult && isPremium) { // S'il est adulte ET premium, c'est la classe
  console.log("Vous êtes adulte et premium, bienvenue sur ce site très particulier...👀")
} else if (isAdult && !isPremium) { // S'il est adulte mais pas premium, il faut lancer la procédure de raquette de la carte bleue
  console.log("Fopayé là");
} else { // Sinon c'est un gamin, il n'a rien à faire ici.
  console.log("Retourne sur Minecraft.")
}
```

## Les conditions imbriquées

Maintenant que toutes les possibilités des conditions s'offrent à vous, il reste une seule limite ... votre imagination !
Il est tout à fait possible d'imbriquer du code comme suit : 

```js
var isAdult = age >= 18;
var isPremium = true;

if (isAdult) {
  console.log("Vous êtes un adulte, génial !");

  if (isPremium) {
    console.log("Vous avez déjà payé, trop bien !");
    console.log("Accès à notre espace privé pour adulte...");
  } else {
    console.log("Fopayé si tu veux voir notre contenu privé.");
    console.log("Clique sur le lien pour ajouter ta carte bleu");

    var amount = Number(prompt("Montant du paiement :"));

    console.log("Vous avez payé " + amount);
  }
} else {
  console.log("Retourne sur Minecraft.")
}
```
