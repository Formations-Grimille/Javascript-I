/*
------------------------------------------------------
TP 8: Le prix des clefs USB
------------------------------------------------------

- Demander à l'utilisateur d'indiquer le nombre de clefs USBs qu'il souhaite acheter.
- Calculer le tarif dégressif suivant:
    - Moins de 10 clefs USB, 5€
    - Moins de 20 clefs USB, 4€
    - Plus de 20 clefs USB, 3€
*/

var usbKeys = Number(prompt("Combien de clefs souhaitez-vous ?"));
var price;

if (usbKeys < 10) {
  price = usbKeys * 5;
} else {
  if (usbKeys <= 20) {
    price = usbKeys * 4;
  } else {
    price = usbKeys * 3;
  }
}

console.log("Le prix a payer est de " + price + "€.");