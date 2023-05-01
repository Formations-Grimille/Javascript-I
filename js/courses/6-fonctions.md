# Les fonctions

Jusqu'ici, notre programme était une longue série d'instructions qu'on exécute ligne par ligne. S'il l'on souhaite répéter des choses, nous avons les boucles. Mais si l'on souhaite ré-utiliser des choses, nous sommes coincés et il faut dupliquer notre code.

```js
// On code Hogwarts Legacy pour le web ici
var voldemort = {
  name: "Tom Jedusor",
  hp: 200,
  spells: [
    "Avada Kedavra",
    "Crucio",
  ]
}

var harry = {
  name: "Harry Potter",
  hp: 9,
  spells: [
    "Expelliarmus",
    "Lumos",
    "Specto Patronum"
  ]
}

var successSpell;

console.log(harry.name + " lance " + harry.spells[1] + " !");
successSpell = Math.random() < 0.5; // 1 chance sur 2 de réussir le sort

if (successSpell) {
  voldemort.hp -= 20;
  harry.hp += 20;
  console.log("Le sort réussi et inflige 20 dégats magiques");
} else {
  console.log("Le sort a échoué");
}

console.log(voldemort.name + " lance " + voldemort.spells[0] + " !"); // duplication
successSpell = Math.random() < 0.5; // duplication

if (successSpell) { // duplication
  voldemort.hp += 2000000;// duplication
  harry.hp -= 2000000;// duplication
    console.log("Le sort réussi et inflige 2000000 dégats magiques");
} else {// duplication
  console.log("Le sort a échoué");// duplication
}// duplication
```

Le code ci-dessus est dupliqué, et imaginez sur le combat se poursuivait parce qu'Harry Potter était aussi fort que Lord Voldemort ? Nous pourrions écrire une partie de ce programme ré-utilisable. Les fonctions vont nous permettre de répondre à cette problèmatique.

## Déclarer une fonction

Il y a deux étapes pour une fonction. La première est la déclaration de la fonction, avec le mot clé `function`. Vient ensuite le nom de la fonction, puis ses paramètres optionnels.
Par exemple : 

```js
function castSpell() {
  console.log("J'envoie un sort !");
}

console.log("J'adore le Javascript");

// J'adore le Javascript
```

Comme prévu, l'instruction `console.log("J'envoie un sort !")` est ignorée par le programme car elle est contenue dans la fonction `castSpell` et l'appel de la fonction n'a pas été fait.
**Tout ce qui est écrit dans des fonctions et qui n'est pas appelé est ignoré**

### L'appel de fonction

Pour executer le code de la fonction, il faut faire un appel de la fonction.

```js
function castSpell() {
  console.log("J'envoie un sort !");
}

console.log("J'adore le Javascript");
castSpell();

// J'adore le Javascript
// J'envoie un sort !
```
### Les paramètres de fonction

Une fonction peut avoir ou non des paramètres nécessaires à son execution. Ce sont les paramètres de la fonction.

```js
function castSpell(attacker, target, spell, damages) {
  console.log(attacker.name + " lance " +  spell + " !");
  successSpell = Math.random() < 0.5; // 1 chance sur 2 de réussir le sort
  if (successSpell) {
    target.hp -= damages;
    attacker.hp += damages;
    console.log("Le sort réussi et inflige " + damages + " dégats magiques");
  } else {
    console.log("Le sort a échoué");
  }
}

var voldemort = {
  name: "Tom Jedusor",
  hp: 200,
  spells: [
    "Avada Kedavra",
    "Crucio",
  ]
}

var harry = {
  name: "Harry Potter",
  hp: 9,
  spells: [
    "Expelliarmus",
    "Lumos",
    "Specto Patronum"
  ]
}


castSpell(voldemort, harry, voldemort.spells[0], 250); // On passe les paramètres à la fonction (attacker = voldemort, target = harry, spell = premier sort de voldemort, 250 de dégats)
// On pourrait alors faire attaquer Harry en une seule ligne de code, bon il attaque avec un lumos, mais c'est Harry quoi
castSpell(harry, voldemort, harry.spell[1], 10); // Cette fois ci notre fonction d'attaque va s'executer avec (attacker = harry, target = voldemort, spell = Un bon lumos des familles, 10 points de dégats, ce qui est ridicule je le conçois)

// Tom Jedusor lance Avada Kedavra !
// Le sort à échoué (ou pas, c'est une chance sur deux mais là c'est pas d'pot)
// Harry Potter lance lumos
// Le sort réussi et infligne 10 dégats magiques
```

On pourrait continuer notre combat en executant une série de `castSpells`avec des paramètres différents.

### Le retour d'une fonction

Les fonctions peuvent avoir un résultat en retour. Les fonctions qui n'ont pas de résultats de retour sont appelées des fonctions `void`. Void = Néant.
Le retour d'une fonction peut se récupérer dans une variable, c'est ce que l'on faisait en utilisant prompt depuis le début ! Prompt est une fonction de Javascript !

```js
function castSpell(attacker, target, spell, damages) {
  console.log(attacker.name + " lance " +  spell + " !");
  successSpell = Math.random() < 0.5; // 1 chance sur 2 de réussir le sort
  if (successSpell) {
    target.hp -= damages;
    attacker.hp += damages;
    console.log("Le sort réussi et inflige " + damages + " dégats magiques");
  } else {
    console.log("Le sort a échoué");
  }

  return successSpell; // On renvoie si le sort à échoué ou non mais on renvoie ce qu'on veut comme informations
}

var voldemort = {
  name: "Tom Jedusor",
  hp: 200,
  spells: [
    "Avada Kedavra",
    "Crucio",
  ]
}

var harry = {
  name: "Harry Potter",
  hp: 9,
  spells: [
    "Expelliarmus",
    "Lumos",
    "Specto Patronum"
  ]
}

var hasBeenSuccessfulSpell;

hasBeenSuccessfulSpell = castSpell(voldemort, harry, voldemort.spells[0], 250); // On récupère le return de castSpell dans hasBeenSuccessfulSpell;

if (!hasBeenSuccessfulSpell) {
  console.log("Bouhouuuu t'es nul !")
}
hasBeenSuccessfulSpell = castSpell(harry, voldemort, harry.spell[1], 10);

// Tom Jedusor lance Avada Kedavra !
// Le sort à échoué (ou pas, c'est une chance sur deux mais là c'est pas d'pot)
// Bouhouuuu t'es nul !
// Harry Potter lance lumos
// Le sort réussi et infligne 10 dégats magiques
```

### Un mot sur les fonctions dans les objets

Oui, les objets peuvent aussi avoir des fonction en clé => valeur.
Par exemple :

```js
function castSpell(attacker, target, spell, damages) {
  console.log(attacker.name + " lance " +  spell + " !");
  successSpell = Math.random() < 0.5; // 1 chance sur 2 de réussir le sort
  if (successSpell) {
    target.hp -= damages;
    attacker.hp += damages;
    console.log("Le sort réussi et inflige " + damages + " dégats magiques");
  } else {
    console.log("Le sort a échoué");
  }

  return successSpell; // On renvoie si le sort à échoué ou non mais on renvoie ce qu'on veut comme informations
}

var voldemort = {
  name: "Tom Jedusor",
  hp: 200,
  spells: [
    "Avada Kedavra",
    "Crucio",
  ],
  evilLaugh = function (volume) {
    console.log(this.name + " ricane."); // On utilise le mot clef this quand une fonction dans un objet a besoin d'utiliser une clef de l'objet actuel (this)

    if (volume > 0.5) {
      console.log("HAHAHAHAHAHA");
    } else {
      console.log("hahahahahaha");
    }
  }
}

var harry = {
  name: "Harry Potter",
  hp: 9,
  spells: [
    "Expelliarmus",
    "Lumos",
    "Specto Patronum"
  ],
  scream: function () {
    console.log(this.name + ": Ma cicracitre, ça m'brûle !"); // On utilise le mot clef this quand une fonction dans un objet a besoin d'utiliser une clef de l'objet actuel (this)
  }
}

var hasBeenSuccessfulSpell;

harry.scream();
voldemort.evilLaugh(0.8);
hasBeenSuccessfulSpell = castSpell(voldemort, harry, voldemort.spells[0], 250); // On récupère le return de castSpell dans hasBeenSuccessfulSpell;

if (!hasBeenSuccessfulSpell) {
  console.log("Bouhouuuu t'es nul !")
}
hasBeenSuccessfulSpell = castSpell(harry, voldemort, harry.spell[1], 10);

// Harry: Ma cicracitre, ça m'brûle !
// Tom Jedusor: HAHAHAHAHAHA
// Tom Jedusor lance Avada Kedavra !
// Le sort à échoué
// Bouhouuuu t'es nul !
// Harry Potter lance lumos
// Le sort réussi et infligne 10 dégats magiques
```