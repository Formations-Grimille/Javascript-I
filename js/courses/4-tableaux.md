# Les tableaux numériques

Un tableau numériques est une liste de variables dont chaque élément possède un indice. L'indice d'un tableau numérique commence à 0.

## Déclaration d'un tableau

Un tableau se déclare comme une variable classique, mais on utilisera des crochets pour lui indiquer le type Array.

```js
var fruits = []; // Déclaration d'un tableau de fruits vides.
```

Si l'on connait à l'avance les éléments d'un tableau, nous pouvons le remplir directement.

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.
```

Dans l'exemple précédent, l'indice de Banane est 0, l'indice de Fraises est 1, et l'indice de Framboises et 2.
Les 3 variables sont de type String.

![](https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/290009406_5199396096775893_8398522267646832960_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=V8c3Vbt7l_sAX_Snoi5&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCiP6uF5kh1Nl6oO_0Ldkw3ytWJWE_Mv91iRqfCOAxmDw&oe=6454C57F)
*À retenir, en programmation, un tableau commence à l'indice 0*

Il est possible de connaitre la longueur d'un tableau, c'est à dire son indice maximum + 1 (comme on commence à zéro).

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.
var nbFruits = fruits.length; // Le dernier indice est Framboise à l'indice 2 + 1 = 3 éléments. Il y a bien 3 éléments dans mon tableau (des bananes, des fraises, des framboises)
```

## Parcourir un tableau

Pour utiliser une variable du tableau, il suffit de faire appel au tableau et d'insérer l'indice de la variable qui nous intéresse entre les crochets. Par exemple : 

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.

console.log("Un singe mange une " + fruits[0]); // Un singe mange un Banane
console.log("J'aime les " + fruits[2]); // J'aime les Framboises
```

Nous pouvons aussi parcourir toutes les valeurs d'un tableau à l'aide d'une boucle `for`, comme on connait à l'avance la valeur de fin du compteur de la boucle.

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.

for (var i = 0; i < fruits.length; i++) { // On démarre de 0 à la taille de notre tableau et on va de 1 en 1 pour i
  console.log("Je mange: " + fruits[i]); // On affiche "Je mange : " suivi de la valeur correspondante à l'indice de notre tableau. i vaudra 0, puis 1, puis 2 (2 = length de notre tableau)
}

// Je mange: Banane
// Je mange: Fraises
// Je mange: Framboises
```

## Modifier un tableau

Un tableau n'est pas figé. Son contenu ou une partie de son contenu peut être modifié ou supprimé si nécessaire.

### Editer une variable du tableau

Pour éditer une variable d'un tableau, on va simplement ré-assigner la valeur à l'indice que l'on souhaite.
Par exemple :

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.

fruits[1] = "Noix"; // On modifie les Fraises par des Noix ("Fraises -> Noix");

console.log(fruits); // [Banane, Noix, Framboises]
```

### Ajouter des variables

On peut ajouter des variables grâce à des petits raccourcis sur nos variables tableaux.


**push()**
```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.

//-- Push = ajouter un élément à la fin du tableau
fruits.push("Kiwi"); // J'ajoute des Kiwis à la fin du tableau
fruits.push("Litchi"); // J'ajoute des Litchis à la fin du tableau
fruits.push("Orange") // J'ajoute des Oranges à la fin du tableau

console.log(fruits) // [Banane, Fraises, Framboises, Kiwi, Litchi, Orange]
```

**unshift()**
```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.

fruits.push("Kiwi"); // J'ajoute des Kiwis à la fin du tableau
fruits.push("Litchi"); // J'ajoute des Litchis à la fin du tableau
fruits.push("Orange") // J'ajoute des Oranges à la fin du tableau

// -- Unshift = Ajouter un élément au début du tableau
fruits.unshift("Clémentine"); // J'ajoute des Clémentines au début du tableau

console.log(fruits) // [Clémentine, Banane, Fraises, Framboises, Kiwi, Litchi, Orange]
```

### Supprimer des éléments d'un tableau

En Javascript, il existe au moins neuf possibilités pour supprimer des éléments d'un tableau. Nous en verrons quelques-unes ici.

**pop()**

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.

//-- Pop = retirer le dernier élément du tableau
fruits.pop()
console.log(fruits) // [Banane, Fraises]
```

**shift()**
```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.

// -- Shift = Retirer le premier élément du tableau
fruits.shift()
console.log(fruits) // [Fraises, Framboises]
```
**Le mot clef delete**
Il existe également un mot clef delete pour supprimer le contenu d'un indice d'un tableau, tout en gardant l'indice vide. La longueur du tableau reste alors inchangée
```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.

//-- delete <tableau[index]> Supprimer le contenu mais garder l'emplacement de l'indice du tableau
delete fruits[1];

console.log(fruits) // [Banane, undefined, Framboises]
```

**splice()**
Splice permet de retirer une partie du tableau à un index donné et d'une longueur donnée.
```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.
fruits.splice(2, 1); // Le 2 correspond à l'indice où je commence à retirer, le 1 correspond à combien après le 2 je veux retirer

console.log(fruits) // [Banane, Fraises]
```

Si je veux, je peux avoir un deuxième tableau des éléments supprimés. Pour cela : 
```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.
var deleted = fruits.splice(2, 1); // Le 2 correspond à l'indice où je commence à retirer, le 1 correspond à combien après le 2 je veux retirer

console.log(fruits) // [Banane, Fraises]
console.log(deleted) // [Framboises]
```

### Copier une partie du tableau
Je peux vouloir copier une partie du tableau afin de travailler dessus sans altérer la version originale de mon tableau. Pour cela, on va utiliser **slice()**

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.
var copie = fruits.slice(1, 3); // Comme on copie, on a un nouveau tableau

console.log(copie); // [Fraises, Framboises]
console.log(fruits) // [Banane, Fraises, Framboises]
```

### Trouver l'indice qui correspond à la valeur

Parfois, il est nécessaire de chercher si une valeur existe dans notre tableau et d'en déduire son indice.
`indexOf()` va nous permettre de connaitre l'indice correspondant à la valeur cherchée.

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.
var index = fruits.indexOf("Banane"); // 0, 1, 2, 3 selon l'emplacement de la banane dans le tableau. -1 si non trouvé

console.log(index); // 0
```

Cela nous permet généralement ce genre de code : 

```js
var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits avec 3 éléments.
var index = fruits.indexOf("Orange"); // 0, 1, 2, 3 selon l'emplacement de la banane dans le tableau. -1 si non trouvé


if (index < 0) {
  console.log("Les oranges n'ont pas été trouvées.");
} else {
  console.log("Vous avez des oranges dans votre liste de fruits.");
}
```