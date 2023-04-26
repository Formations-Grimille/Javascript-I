var users = [
  {
    name: "Martine",
    age: 56,
    premium: true
  },
  {
    name: "Martin",
    age: 18,
    premium: false
  }, 
  {
    name: "Jean",
    age: 45,
    premium: true
  },
  {
    name: "Mickaël",
    age: 29,
    premium: true
  }
];

var totalAge = 0;
var premiumCount = 0;

for (var i = 0; i < users.length; i++) {
  if (users[i].premium) {
    totalAge += users[i].age;
    premiumCount++;
  }
}

var average = totalAge / premiumCount;

console.log("La moyenne d'age des utilisateurs abonnées du site est : " + average + " ans.");



