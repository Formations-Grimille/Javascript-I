# Les variables

- Une variable = un emplacement mémoire dans la RAM de votre device (PC, Smartphone, etc)
- Il faut imaginer ça comme une boite.
- Dans une variable, on va pouvoir mettre du __contenu__.

## Comment déclarer une variable en JS ?

En JS, on va utiliser le mot clef `var` (pour le moment) suivi d'un nom pour notre variable. Le nom, c'est comme une étiquette qui va nous permettre de différencier une variable d'une autre.

### Exemple
```js
var firstname = "Jean"; // Déclaration d'une variable firstname qui contient "Jean"
var lastname = "Dupont"; // Déclaration d'une variable lastname qui contient "Dupont"
```

## Afficher ma variable dans la console

J'adore ma nouvelle variable, elle est sexy. Mais elle serait plus sexy dans la console.

Pour afficher une variable dans la console, on va utiliser l'instruction : 

```js
var firstname = "Jean";
var lastname = "Dupont";

console.log(firstname); // Affiche Jean
console.log(lastname); // Affiche Dupont
```

On peut également incorporer nos variables dans des messages avec la concaténation de variables:

```js
var firstname = "Jean";
var lastname = "Dupont";

console.log(firstname); // Affiche Jean
console.log(lastname); // Affiche Dupont

console.log("Bonjour, je m'appelle " + firstname + " " + lastname + " !"); // Affiche Bonjour, je m'appelle Jean Dupont !
```

## Les types de variables

En Javascript, il existe plusieurs types de variables.

- Le Boolean => c'est un vrai / faux (true / false)
- Le Number => c'est un chiffre ou un nombre (3, 29, -4, 284740297, 3.14628)
- Le String => c'est une chaîne de caractère (et non un vêtement), il est entouré de guillemets. Ex: "Bonjour", "Mayonnaise", "Fesse"
- Le type "undefined" => c'est le type "non défini"
- Le type "null" => c'est le type "vide"
- Le type Array => c'est le type Tableau
- Le type Object => c'est le type Objet
