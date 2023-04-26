//! Résumé sur les tableaux !//

var fruits = ["Banane", "Fraises", "Framboises"]; // Un tableau de fruits

fruits[1] = "Noix"; // On modifie le fruit à l'index 1 par des Noix ("Fraises -> Noix");

//-- Push = ajouter un élément à la fin du tableau
fruits.push("Kiwi"); // J'ajoute des Kiwis à la fin du tableau
fruits.push("Litchi"); // J'ajoute des Litchis à la fin du tableau
fruits.push("Orange") // J'ajoute des oranges à la fin du tableau

//-- Pop = retirer le dernier élément du tableau
fruits.pop(); // J'enlève le dernier élement du tableau (Ici les oranges)

// -- Unshift = Ajouter un élément au début du tableau
fruits.unshift("Clémentine"); // J'ajoute des Clémentines au début du tableau

// -- Shift = Retirer le premier élément du tableau
fruits.shift();

//-- Slice = Copier une part du tableau (à ne pas confondre avec splice)
var decoupe = fruits.slice(2, 5); // Comme on copie, on a un nouveau tableau

// -- Splice = Retirer une part du tableau
fruits.splice(2, 1); // Le 2 correspond à l'indice où je commence à retirer, le 1 correspond à combien après le 2 je veux retirer
//Si je veux, je peux récupérer les éléments retirés du tableau
var deleted = fruits.splice(2, 1);

//-- delete <tableau[index]> Supprimer le contenu mais garder l'emplacement de l'indice du tableau
delete fruits[2]; // Je supprime le contenu à l'index 2 des fruits, du coup ça met "undefined" à la place

//-- indexOf - Chercher une valeur dans le tableau (donne l'indice correspondant ou -1 si non trouvé)
var index = fruits.indexOf("Banane"); // 0, 1, 2, 3 selon l'emplacement de la banane dans le tableau. -1 si pas de bananes.