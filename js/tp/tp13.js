// -- Double boucle (Un seul console.log)-- //
/**
 * OK
 * OOK
 * OOOK
 * OOOOK
 * OOOOOK
 */

var display = "";

for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= i; j++) {
    display += "O";
  }
  display += "K";
  display += "\n";
}
console.log(display);

// i = 0
// j = 0

// i = 1
// j = 0
// j = 1

// i = 2
// j = 0;
// j = 1;
// j = 2;

// i = 3
// j = 0
// j = 1
// j = 2
// j = 3;

// ...

// i = 5
// j = 0
// j = 1
// j = 2
// j = 3;
// j = 4;
// j = 5;

