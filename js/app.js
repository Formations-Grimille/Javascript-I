function sayHello(firstname, lastname) {
  console.log("Bonjour !", firstname + " " + lastname);
  console.log("Hola", firstname + " " + lastname);
  console.log("Guten Tag", firstname + " " + lastname);
  console.log("Hello", firstname + " " + lastname);
}

function generateANumber() {
  const sinus = Math.sin(Math.PI) * Math.random();

  if (sinus < 0) {
    return 1;
  } else {
    console.log("qkjseklfjqslked")
    console.log("qkjseklfjqslked")
    console.log("qkjseklfjqslked")
    console.log("qkjseklfjqslked")
    return sinus
  }
}

sayHello("Mickaël", "Dhainaut");
sayHello("Jérome", "Dupont");
sayHello("Marine", "Durand");

var rand = generateANumber();
console.log("Nombre aléatoire : ", rand);

var rand2 = generateANumber();
console.log("Nombre aléatoire 2: ", rand2);




// function sayHello(firstname, lastname) {
//   console.log("Bonjour tout le monde, je m'appelle " + firstname + " " + lastname);
// }

// function scream() {
//   console.log("NINJAAAAAA !");
// }

// function average(somme, nb) {
//   return somme / nb;
// }

// scream();
// sayHello("Mickaël", "Dhainaut");
// sayHello("Martin", "Matin");
// sayHello("Philiibert", "Blabla");

// var m = average(200, 5);

// console.log("Moyenne: ", m);


var user = {
  firstname: "Benjamin",
  lastname: "Franklin",
  attack: function(weapon) {
    console.log(this.firstname + " " + this.lastname + " -> Banzaiii à la " + weapon);
  }
};

user.attack("hâche");
user.attack("grenade");





// TP 17: Des calculs de périmètres

// Écrire un programme qui contient une fonction de calcul d'aire et de périmètre d'un rectangle, d'aire et de périmètre d'un cercle.
// Appeler les fonctions pour des valeurs de longueur, largeur et rayon différentes.


Périmètre rectangle =(Longueur + largeur) x 2
Périmètre cercle = 2 x Math.PI x rayon

Aire rectangle = Longueur x largeur
Aire cercle = Math.PI x Math.pow(rayon, 2); // POW = Puissance, 2 = Puissance 2
