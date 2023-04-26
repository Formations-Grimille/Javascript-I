var age = 29;
var firstname = "Mickaël";
var lastname = "Dhainaut";
var firstnameTmp = firstname;

firstname = lastname;
lastname = firstnameTmp;

// Affiche mon nom prénom.
console.log("Bonjour je m'appelle " + firstname + " " + lastname +".");
console.log("J'ai " + age + " ans.");