/*
------------------------------------------------------
TP 5: Calculateur de TVA
------------------------------------------------------

- Demander à l'utilisateur un prix HT de la facture
- Demander le taux de la TVA en % (ex: 20)
- Calculer et afficher le montant HT, le montant TVA, le total TTC.
*/

var price = Number(prompt("Quel est le montant HT de la facture?"))
var tva = Number(prompt("Quel est le montant de la TVA (%) ?"));
var tvaAmount = price * (tva / 100);
var total = price + tvaAmount;

console.log("Montant HT: " + price + '€');
console.log("Montant TVA:", tvaAmount + "€ (" + tva + "%)");
console.log("Total TTC de votre facture: " + total + '€');