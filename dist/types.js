"use strict";
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
// let value = "30";
// if (typeof value == "number") console.log("Value est un nombre !");
// function foo(x: string | number) : boolean {
//   if(typeof x === "string" ){
//     return true;
//   }else if (typeof x == "number"){
//     return false;
//   }
//   return fail("x n'est ni un 'string' ni un 'number'");
// }
// foo("number");
// function fail(message: string) : never {
//   throw new Error(message);
// }
// // Une interface : un contrat pour nos objet
// interface Person{
//     name: string;
//     age: number;
//     gender: string;
// }
// const me: Person = {
//   name: "Flo",
//   age: 35,
//   gender: "homme"
// }
// function hello(person: Person){
//   console.log(`Bonjour ${person.name} et tu as ${person.age} ans.`);
// }
// hello(me);
// // Key? et readonly
// // readonly : la propriété e peut pas être modifiée
// // ? : la propriété est optionnelle
// interface IUserProfile {
//   firstname: string;
//   lastname?: string;
//   age?: number;
//   readonly password: string;
// }
// const user1: IUserProfile = {
//   firstname: "Florent",
//   lastname: "Le Bot",
//   // age: 35,
//   password: "azerty"
// }
// console.log(user1);
// // l'héritage dans les interfaces
// interface IAdvancedUserProfile extends IUserProfile {
//   hobbies: string[];
//   color?: string;
// }
// const user2 = <IAdvancedUserProfile>{};
// user2.firstname = "Justine";
// // console.log(user2);
// // LES FONCTIONS
// interface IHello {
//   (name: string, age?: number): void;
// }
// const sayHello : IHello = (name, age) => {
//   console.log(`Bonjour à toi, ${name}. Tu as ${age} ans.`);
// }
// const bestFriend: IHello = name => name;
// // const bestFriend: IHello = name => {
// //   return name;
// // }
// sayHello("Bob", 99);
// console.log(`L'ami de Bob s'apelle ${bestFriend("Justine")}`);
// // les tableaux associatifs
// interface IRepertory extends Array<number> { // Array<number> pour pouvoir utiliser les fonctions comme push
//   [index: number] : number;
// }
// const days: IRepertory = [1, 2, 3, 4, 5];
// days.push(6);
// console.log(days)
// // propriétés illimitées et une fonction dans l'objet
// interface IObject {
//   [index: string] : any; // propriétés illimitées dans notre objet
//   sayHello: { (name: string): void }; // fonction "sayHello" obligatoire dans l'objet
// }
// const myObject: IObject = {
//   title: "Séb",
//   color: "jaune",
//   sayHello(name: string): void {
//     console.log(`Bonjour à toi, ${name}`);
//   }
// };
// myObject.sayHello("Flo");
// // les classes
// class UserProfile {
//   firstName: string;
//   lastName: string;
//   age: number;
//   private _password: string = "testpw"
//   constructor(firstName: string, lastName: string, age: number){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get password() : string {
//     return this._password;
//   }
//   set password(newPw: string) {
//     this._password = newPw;
//   }
// }
// const user1 = new UserProfile("Séb", "Vétu", 36);
// console.log(user1.password);
// user1.password = "newpw";
// console.log(user1.password)
// class Chien{
//   nom: string;
//   couleur: string;
//   age: number;
//   constructor(nom: string, couleur: string, age: number){
//     this.nom = nom;
//     this.couleur = couleur;
//     this.age = age;
//   }
//   displayInfo(){
//     let keys = Object.keys(this);
//     for(let value of keys)
//     console.log(this[value])
//     // console.log(`Le chien ${this.nom} est ${this.couleur} et a ${this.age} ans.`);
// }
// }
// const chien1 = new Chien("Whof", "blanc", 6);
// chien1.displayInfo();
// class UserProfile2 {
//   public myName: string = "Flo";
//   public static myNewName: string = "Florent";
//   static sayHello() {
//     console.log("Hello");
//   }
//   sayWorld() {
//     console.log("World");
//   }
// }
// const myClass = new UserProfile2();
// myClass.sayWorld();
// console.log(myClass.myName);
// console.log("--------------");
// UserProfile2.sayHello();
// console.log(UserProfile2.myNewName);
// class Animals {
//   constructor(
//     public name: string,
//     protected _age: number // contrairement à private on peut les utiliser grace au mot clé protected dans les classes enfants
//   ) {
//     this.name = name;
//     this._age = _age;
//   }
// }
// class Chat extends Animals {
//   constructor(name: string, age: number, public color: string) {
//     super(name, age);
//   }
//   get age(){
//     return this._age;
//   }
// }
// const chat1 = new Chat("Gaspard", 6, "blanc");
// console.log(`Je m'appelle ${chat1.name} et j'ai' ${chat1.age} ans`);
// // abstract
// abstract class User {
//   constructor(public lastname: string, public age: number) {}
// }
// class UserProfile extends User {
//   constructor(lastname: string, age: number, public firstname: string) {
//     super(lastname, age);
//   }
// }
// // new User("Séb", 36); // on ne peut pas créer une instance avec abstract
// const user = new UserProfile("Vétu", 36, "Sébastien");
// console.log(
//   `Salut, je suis ${user.firstname} ${user.lastname} et j'ai ${user.age} ans.`
// );
// l'héritage
// class UserProfile {
//   constructor(public name: string, public age: number) {}
// }
// class AdvanceUserProfile extends UserProfile {
//   constructor(
//     name: string,
//     age: number,
//     public hobbies: string[],
//     public color: string
//   ) {
//     super(name, age);
//   }
// }
// const user1 = new AdvanceUserProfile("Flo", 35, ["Lire", "Cross"], "bleu");
// console.log(user1.name, user1.hobbies);
// Implémenter une interface
// code plus court
// interface UserProfile {
//   name: string;
//   age: number;
// }
// class AdvanceUserProfile implements UserProfile {
//   constructor(public name: string, public age: number, public color: string) {}
// }
// const user1 = new AdvanceUserProfile("Flo", 35, "bleu");
// Node : runtime environment (permet d'exécuter du javascipt en dehors du navigateur, du côté serveur, npm init -y -> "package.json")
