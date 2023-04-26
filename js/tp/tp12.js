var table = Number(prompt("Quelle table de multiplication souhaitez-vous ?"));

console.log("--------");
console.log("Table de ", table);
console.log("--------");

for ( var i = 0; i <= 10; i++) {
  console.log(i + " x " + table + " = " + i * table);
}