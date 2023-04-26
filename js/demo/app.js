const users = [
    {
        name: 'Martine',
        age: 56,
        premium: true
    },
    {
        name: 'Jean',
        age: 34,
        premium: false
    },
    {
        name: 'Benoît',
        age: 48,
        premium: true
    },
    {
        name: 'Marie',
        age: 30,
        premium: true
    }
];
let total = 0;
let avg = 0;
let count = 0;

for(var i = 0; i < users.length; i++) {
    if (users[i].premium) {
        total += users[i].age;
        count++;
    }
}

avg = total / count;

console.log("La moyenne d'âge des utilisateurs abonnés du site est:", avg + " ans.");