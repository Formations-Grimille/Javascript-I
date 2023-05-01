# Les tableaux associatifs

Il existe un autre type que les tableaux numériques : les tableaux associatifs. Un tableau numérique est dit "numérique" car on lui associe un numéro qu'on appelle indice. À la différence d'un tableau associatif pour lequel on va associer des clefs à des valeurs. Dans le langage courant, on parlera "d'objet" plutôt que de tableau associatif.

## Déclaration d'un objet

Un objet se déclare comme une variable classique, mais on utilisera des accolades pour lui indiquer le type Object.

```js
var user = {}; // Déclaration d'un objet user;
```

Si l'on connait à l'avance les éléments d'un objet, nous pouvons le remplir directement.

```js
var user = {
  firstname: "Jean",
  lastname: "Dupont",
  age: 65,
  premium: true
}; // Déclaration d'un objet user avec différentes valeurs
```

Dans l'exemple précédent, on associe bien une clef à une valeur. La clef firstname est associée à Jean, etc. Chaque association peut utiliser tous types de variables JS possibles.
Par exemple des tableaux numériques ou d'autres objets : 

```js
var user = {
  firstname: "Jean",
  lastname: "Dupont",
  age: 65,
  premium: true,
  lang: ["fr", "en", "de", "es"], //Tableau numérique
  social_networks: {
    twitter: 'https://twitter.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com'
  }
};
 // Déclaration d'un objet user avec différentes valeurs
```

Nous également pouvons utiliser plus de profondeurs pour nos objets
Par exemple : 

```js
var users = {
  firstname: "Jean",
  lastname: "Dupont",
  age: 65,
  premium: true,
  lang: ["fr", "en", "de", "es"],
  social_networks: {
    twitter: 'https://twitter.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com'
  },
  animals: [
    {
      name: "Loki",
      type: "Lapin",
      color: ["Grey"],
      pictures: [
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654385164652594/IMG_4429.jpg", // CTRL + Clic 👀
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654798228111411/IMG_1928.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654798978883765/IMG_3997.jpg"
      ]
    },
    {
      name: "Crowley",
      type: "Tortue",
      color: ["Green"],
      pictures: [
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654386334867497/IMG_4311.jpg"
      ]
    },
    {
      name: "Eren",
      type: "Chien",
      color: ["Grey", "Black", "Brown"],
      pictures: [
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653943521230928/IMG_4743.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653943269556234/IMG_4753.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653941575077928/IMG_4843.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653481959039037/IMG_4873.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653479593451662/IMG_5038.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653167390425159/IMG_5073.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653166677413918/IMG_5122.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653166111162499/IMG_5131.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653165763039314/IMG_5147.jpg"
      ]
    },
    {
      name: "Sirius",
      type: "Chien",
      color: ["Grey", "Black", "Brown"],
      pictures: [
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653480050642994/IMG_5021.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653168061517955/IMG_5058.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653164618010726/IMG_5266.jpg"
      ]
    },
    {
      name: "Plume",
      type: "Chat",
      color: ["Orange", "White"],
      pictures: [
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654798572048384/IMG_4010.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654384799752242/IMG_4560.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654385676361758/IMG_4414.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653942493626408/IMG_4805.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653942120317019/IMG_4827.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653481048887317/IMG_4994.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653479257903194/IMG_5040.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653167738572852/IMG_5060.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653166970998857/IMG_5090.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653165129699429/IMG_5178.jpg"
      ]
    },
    {
      name: "Jinx",
      type: "Chat",
      color: ["Black", "White"],
      pictures: [
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654800014876732/IMG_3946.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654799293464636/IMG_3992.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102654386003513354/IMG_4329.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653942938226688/IMG_4775.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653941201780756/IMG_4847.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653483699687444/IMG_4854.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653483125051402/IMG_4856.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653482609168434/IMG_4858.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653481493467297/IMG_4990.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653480642023514/IMG_5011.jpg",
        "https://cdn.discordapp.com/attachments/784216686198128670/1102653165482037278/IMG_5173.jpg"
      ]
    },
  ]
};
 // Déclaration d'un objet user avec différentes valeurs
```
 ## Utilisation d'un objet

 Un objet s'utilise très simplement dans le code. On appelle simplement la variable de l'objet, suivi d'un point pour appeler la clef de l'objet qui nous intéresse. À chaque fois que l'on souhaite descendre en profondeur, on rajoutera un point de séparation après la clef.

```js
var user = {
  firstname: "Jean",
  lastname: "Dupont",
  age: 65,
  premium: true,
  lang: ["fr", "en", "de", "es"], //Tableau numérique
  social_networks: {
    twitter: 'https://twitter.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com'
  }
};
 // Déclaration d'un objet user avec différentes valeurs

console.log("Bonjour, je m'appelle " + user.firstname + " " + user.lastname + ", et j'ai " + user.age + " ans.");
console.log("Mon Twitter: " + user.social_networks.twitter);
console.log("Mon TikTok: " + user.social_networks.tiktok);
console.log("Mon YouTube: " + user.social_networks.youtube);

for (var i = 0; i < user.lang.length; i++) {
  console.log("Je parle: " + user.lang[i]);
}

// Bonjour je m'appelle Jeab Dupont, et j'ai 65 ans.
// Mon Twitter: https://twitter.com
// Mon TikTok: https://tiktok.com
// Mon YouTube: https://youtube.com
// Je parle: fr
// Je parle: en
// Je parle: de
// Je parle: es
```

Il est également possible d'accéder à son objet sous la notation tableau. (moins utilisé)

```js
console.log("Bonjour " + user["firstname"]);
//Bonjour Jean
```

## Mise à jour d'un attribut de l'objet

La mise à jour s'effectue comme d'habitude, c'est à dire une ré-assignation de variable. Il faudra simplement veiller à la profondeur de l'objet.

```js
var user = {
  firstname: "Jean",
  lastname: "Dupont",
  age: 65,
  premium: true,
  lang: ["fr", "en", "de", "es"], //Tableau numérique
  social_networks: {
    twitter: 'https://twitter.com',
    tiktok: 'https://tiktok.com',
    youtube: 'https://youtube.com'
  }
};

console.log("J'ai " + user.age + "ans.");

user.age = 22; // On ré-assigne la valeur que l'on souhaite, comme dans le cas d'une variable classique.
console.log("J'ai " + user.age + "ans.");

// J'ai 65 ans.
// J'ai 22 ans.
```

**NOTE**

La notation des objets en Javascript est la même que dans les fichiers JSON. En effet, JSON veut dire JavaScript Object Notation. Le format JSON est très utilisé dans la plupart des langages et dans le web pour transmettre ou enregistrer des données. Il est donc très important de connaitre la syntaxe des objets JS.