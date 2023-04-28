# Les boucles

Les boucles nous permettent de répéter du code. Il existe différents types de boucles.

## Les boucles compteurs

Ce sont des boucles dont on connait le nombre de répétitions à l'avance. Par exemple, affiche 10 fois, "Bonjour j'aime les ballons."
Pour utiliser une boucle compteur, on va utiliser le mot clef `for` suivi de 3 instructions dans les parenthèses.

- La première instruction est le point de départ de notre compteur.
- La seconde instruction est le point d'arrivé de notre compteur.
- La dernière instruction est le pas de notre compteur.

Ces instructions sont séparées par des points virgules.
```js
var i; // on prévoit une variable pour notre compteur

for (i = 0; i < 10; i++) { // i = 0; -> On démarre à zéro | i < 10 -> on répète jusque 10 exclu (0,1,2,3,4,5,6,7,8,9) comme on démarre à zéro on a bien 10 répétitions. | À chaque tour de boucle, on augmente de 1 en 1 la valeur de i. On pourrait avoir des boucles qui ne comptent pas de 1 en 1 mais de 2 en 2 ou 5 en 5 par exemple.
console.log("Ballon n°" + i);
}

// Ballon n°0
// Ballon n°1
// Ballon n°2
// Ballon n°3
// Ballon n°4
// Ballon n°5
// Ballon n°6
// Ballon n°7
// Ballon n°8
// Ballon n°9

```

Ces boucles vont être très utilisées pour parcourir les entrées d'un tableau.

## La boucle tant que

C'est une boucle dont on ne connait pas le nombre de répétitions à l'avance. Par exemple,TANT QUE je ne t'ai pas dit d'arrêter, répète "J'aime le pâté de campagne". On ne sait pas à l'avance le moment où l'arrêt sera prononcé.
En Javascript, cela s'écrit de la forme : 

```js
var repeat = true;

while (repeat) {
  console.log("J'aime le pâté de campagne !"); 
}

//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
...
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
//J'aime le pâté de campagne !
```

**ATTENTION**: avec les boucles TANT QUE / FAIT JUSQU'À TANT QUE, on peut très facilement se retrouver avec des boucles infinies ! Le processeur du PC délivre alors beaucoup de puissance pour délivrer le maximum de tour de boucles en minimum de temps d'execution. Pensez toujours à une condition de sortie valide ! En Javascript, l'onglet pourra planter et l'ordinateur être ralenti pendant l'execution de notre programme. Fermer l'onglet ou ré-ouvrir le navigateur ré-initialise le script.

## La boucle FAIT / JUSQU'A TANT QUE

Cette boucle ressemble à la boucle précédente, hormis le fait que la vérification de la condition de la boucle se faire après la première exécution.

```js
var repeat = false;
do {
  console.log("J'aime le pâté de campagne");
} while (repeat);

//J'aime le pâté de campagne !
```

Même si le repeat est false ici, la boucle s'exécute au moins une fois !

Note : attention à la syntaxe ici, les accolades sont après le `do` et non plus après le `while` comme dans la boucle TANT QUE

**Petite image qui illustre la différence entre les deux boucles :**
![](https://i.redd.it/6wksqjmmyw321.jpg)

*Première boucle : Tant que tu n'as pas atteint le bord, cours !*
*Deuxième boucle : Cours ! Et après regarde si tu as atteint le bord !* 