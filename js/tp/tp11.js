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