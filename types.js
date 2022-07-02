"use strict";

const me = {
    name: "Flo",
    age: 35,
    gender: "homme"
};
function hello(person) {
    console.log(`Bonjour ${person.name} et tu as ${person.age} ans.`);
}
hello(me);
const user1 = {
    firstname: "Florent",
    lastname: "Le Bot",
    // age: 35,
    password: "azerty"
};
console.log(user1);
const user2 = {};
user2.firstname = "Justine";
console.log(user2);
