# Les variables

- Une variable = un emplacement mémoire dans la RAM de votre device (PC, Smartphone, etc)
- Il faut imaginer ça comme une boite avec une étiquette.
- Dans une variable, on va pouvoir mettre du __contenu__.

## Comment déclarer une variable en JS ?

En JS, on va utiliser le mot clef `var` (pour le moment) suivi d'un nom pour notre variable. Le nom, c'est l'étiquette qui va nous permettre de différencier une variable d'une autre.

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

ou bien (équivalent)

```js
var firstname = "Jean";
var lastname = "Dupont";
var fullname = firstname + " " + lastname;

console.log(firstname); // Affiche Jean
console.log(lastname); // Affiche Dupont

console.log("Bonjour, je m'appelle " + fullaname + " !"); // Affiche Bonjour, je m'appelle Jean Dupont !
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

## Récupérer l'entrée utilisateur

Pour récupérer l'entrée utilisateur, nous allons utiliser un prompt. Le prompt affiche une boîte de dialogue avec un champs texte et nous permet de stocker le contenu de ce texte dans une variable afin de s'en resservir par la suite.

### Comment utiliser le prompt : 
```js
var firstname = prompt("Quel est votre prénom ?"); //on collecte le champs saisi par l'utilisateur dans la variable firstname.

console.log("Bonjour " + firstname + "!"); // Affiche
```

*En situation réelle, il est très rare d'utiliser un prompt. On préférera utiliser des champs `<input>` de formulaires HTML ou des calls API pour remplir nos variables.*

## Les opérations arithmétiques (ou faire des maths avec nos variables)

Grâce aux variables, il est tout à fait possible de faire des maths élémentaires.
Il y a 5 opérations arithmétiques élementaires : 

### L'addition

```js
var temperature1 = 28;
var temperature2 = 4;

var resultat = temperature1 + temperature2; // 32
```

### La soustraction

```js
var golds = 19000;
var cost = 200;

var buy = golds - cost; // 18800 pièces d'or !
```

### La multiplication

```js
var longueur = 8;
var largeur = 4;

var aire = longueur * largeur;
```

### La division

```js
var bonbons = 20;
var moitie = bonbons / 2;
```

### Le modulo (reste de la division euclidienne)

```js
var nombre = 29;
var reste = nombre % 2 // Reste 1 car on a 14 x 2  = 28
```

## Les comparaisons

Il est également possible de comparer des variables entre elles.

Par exemple : 

```js
var age = 29;
var isAdult = age >= 18; // Est-ce que l'age est plus grand ou égal à 18 ? ==> True
var isBaby = age < 1; // Est-ce que l'age est plus petit que 1 ? ==> False 
var isEqual = age === 29; //Est-ce que l'age est égal et de même type que 29 ? ==> True
var isDifferent = age !== 29; //Est-ce que l'age est différent ou de type different à 29 ? ==> false
```

On peut aussi utiliser les signes != ou == au lieu du triple égal qui ne vérifie pas le typage de la variable, mais il est plutôt recommandé de toujours vérifier le typage.

Par exemple : 

```js
var age = 29; // Number
var age2 = "29"; // String

var isEqual = age == age2; // Dans ce cas là, les âges sont égaux, car on ne verifie pas le typage
var isEqual2 = age == age2; //Dans ce cas là, les âges ne sont pas égaux même si leur valeur est la même car un String est différent d'un Number
```

## Réassignation de variables

Il est tout à fait possible d'utiliser une variable et de changer son contenu plus tard dans le programme.

Par exemple : 

```js
var firstname = "Guillaume";

console.log("Bonjour " + firstname); // Bonjour Guillaume

firstname = "Jean";

console.log("Bonjour " + firstname); // Bonjour Jean
```

Dans l'exemple précédent, la case mémoire qui s'appelle firstname et qui contient "Guillaume" va contenir "Jean" quelques lignes plus tard, et effacer "Guillaume".
On ne change pas de case mémoire (ou boite), on change simplement le contenu de la boite.

### Astuces

Il est également possible de ré-assigner une variable en ré-utilisant le contenu qui la précède.

Par exemple : 

```js
var temperatureDuFour = 180;

console.log("J'augmente le thermomètre!");

temperatureDuFour = temperatureDuFour + 20;

console.log("Temperature du four: " + temperatureDuFour); // Temperature du four: 200
```

On peut simplifier l'écriture: 

```js
var temperatureDuFour = 180;

console.log("J'augmente le thermomètre!");

temperatureDuFour += 20;

console.log("Temperature du four: " + temperatureDuFour); // Temperature du four: 200
```

Si l'on incrémente de 1 et non de 20, on peut également simplifier : 

```js
var temperatureDuFour = 180;

console.log("J'augmente le thermomètre!");

temperatureDuFour++;

console.log("Temperature du four: " + temperatureDuFour); // Temperature du four: 181
```

## Notes:

### À propos de la précision des nombres à virgules

Si l'on essaie de taper 0.1 + 0.2 dans la console Javascript, on obtient 0.0000000034 au lieu de 0.3. Alors que 0.4 + 0.5 = 0.8.
Cela est dû à la précisions des bits sur lesquels sont codés les nombres en Javascript. Plus d'infos : https://javascript.plainenglish.io/why-0-1-0-2-0-3-in-javascript-d7e218224a72