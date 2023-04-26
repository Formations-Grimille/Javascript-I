function sayHello() {
  console.log("Bonjour les gens");
}



var id = setInterval(sayHello, 1000);

setTimeout(function() {
  clearInterval(id);
}, 5000);


