// // les variables
// let myVariable;
// myVariable = "Flo";
// let age = 27;
// let myName = "Alex";
// myName = "Bob";
// let a: any;
// let x: number;
// let y: string;
// let z: boolean;
// let myFavouriteNumber: number = 54;
// // les tableaux
// // let friends: any[] = []; // pour tous les types 
// let friends: (number | string)[] = []; // pour les int et les string
// friends = ["Alexis", "Justine", "Sophie", 25];
// friends = [27, 25]; 
// // attention aux clés pour réassigner une variable
// let userData:{name: string; age: number; isMajor: boolean} = {
//   name: "Alexis",
//   age: 27,
//   isMajor: true
// }
// // les enums et les tuples 
// // ENUM : collection de valeurs qui ont un lien entre elles (jour de la semaine)
// // TUPLE : similaire aux arrays mais ne peut contenir qu'une seul valeur du type spécifié
// enum Weekdays {
//   Lundi = 1,
//   Mardi,
//   Mercredi
// };
// console.log(Weekdays[0]);
// console.log(Weekdays[1]);
// // les tuples
// let identity: [string, number, string] = ["Alexis", 27, "Alex"];
// console.log(identity);
// // le type void : l'absence de type
// // les fonctions 
// function helloWorld(): void{ // void peut être utilisé parce qu'aucun type ne va être renvoyé (pas de return)
//   console.log("Salut à tous !");
// }
// helloWorld();
// function addition(x: number, y: number): number {
//   return x + y;
// }
// console.log(addition(5,5));
// // création d'un type
// type Identity = {
//   name: string;
//   age: number;
//   isMajor: boolean;
//   hobbies: string[];
// }
// const identity: Identity = {
//   name: 'Flo',
//   age: 34,
//   isMajor: true,
//   hobbies: ['cross', 'informatique', 'lire']
// }
// // le Typeof et le type 'never'
var value = 30;
if (typeof value == "number")
    console.log("Value est un nombre !");
