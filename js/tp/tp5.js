var price = Number(prompt("Quel est le montant HT de la facture?"))
var tva = Number(prompt("Quel est le montant de la TVA (%) ?"));
var tvaAmount = price * (tva / 100);
var total = price + tvaAmount;

console.log("Montant HT: " + price + '€');
console.log("Montant TVA:", tvaAmount + "€ (" + tva + "%)");
console.log("Total TTC de votre facture: " + total + '€');
console.log("Type de tva" + typeof tva);
console.log("Une variable à afficher", total);