// LESSON 1
// Variable = A container that stores a value. Behaves as if it were the value it contains

// LESSON 2
// Arithmetic operators
// addition = +
// subtraction = -
// multiplication = *
// division = /
// exponents = **
// reminder == %

//  Augmented assignment operators
//  students += 1    =   students = students + 1  - It is also called compound assignment operator
// students -= 1
// students *= 1
// students /= 1
// students **= 1
// students %= 1  It can be used to identify the type of number eg Odd or Even

// increment = ++
// decrement = --

// Operator precedence
// paranthesis - ()
// exponents
// multiplication & Division & modulo
// addition & subtraction

// LESSON 3
// Accessing user input
// EASY WAY - window prompt
// PROF WAY - HTML Textbox

// Type conversion - change the datatype of a value to another (string, numbers, booleansq)
// Eg.
// let age = window.prompt("How Old are you?");
// age = Number(age)
// age += 1;
// console.log(age);
// What its doing its not actually adding age its concating 1 to the age so if its 32 it will be 321
//So we are doing string Concating

// If we need it to be a number we need to wrap it into a number function Number()

// LESSON 4
// //What happens when we convert different values into different datatypes
// let x = "Pizza";
// let y = "Pizza";
// let z = "Pizza";

// x = Number(x); //Now if you want to change alphabet into a number that variable will be a NaN and typeof is number
// y = String(y); //The word pizza is a string so converting it to a string it will remain Pizza and typeof is string
// z = Boolean(z); //Converting a string to a boolean it returns true so it will be true and typeof boolean Note if string doesent exist  it will return false

// // Now we need to console.log their answers and their type

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// LESSON 5
// const - a variable that cant be changed (constant variable)
// let - a variable that can be changed
// So when the variable doesent have to be changed here is where you use const

// LESSON 6
// Math - built-in object that provides a collection of math related properties and methods
// Eg. when you want to say PI
// console.log(Math.PI);
// console.log(Math.E);

// Math.round() - rounds  the number
// Math.floor() - round down
// Math.ceil() - rounds up
// Math.trunc() - Eliminate any decimals
// Math.pow() - Power
// Math.sqrt() - Squareroot
// Math.log() - Natural loogarithm
// Math.sin() - Sine
// Math.cos() - Cos
// Math.tan() - Tan
// Math.abs() - Absolute value of a number so if its negative its gonna be positive
// Math.sign() - Sign
// Math.max() - Returns maximum value
// Math.min() - Returns minimum value

// RANDOM NUMBER GENERATOR
// we gonna use math . random to get random number then we multiply it by 6 and encrose it with math.floor and then we add one or
// any number that we want tone the minimum value
//AAdding  max and min

// const min = 50;
// const max = 100;

// let randomNumber = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNumber);

// .checked property - determines the chaked state of an HTML checkbox or radio button element

// LESSON 7
// String Methods - Allows to manipulate and work with text
// .charAt() - Checks the characters of your string
// .indexOf() - Returns the first occurance of the character
// .lastIndexOf() - Returns the Last occurance of the character
// .length - Isnt a method but it gets the lenght of the string
// .trim() - Removes white spaces
// .toUpperCase() - Makes the string to toUpperCase
// .toLowerCase() - Makes the string to toLowerCase
//.repeat(3) - Repeat a strng 3 times
//.startWith("B") -    Checks if the string starts with something and then return a boolean like here it checks if it starts with B
// .endWith() - almost the same
// .replaceAll("-","+") - Starting value is the one we are replacing and the next is the one we are replacing with
// .padStart(20 , "0") - pad start with 0 until 20 chars
// .padEnd()
// .includes("@") - Checks if the string includes something and then return a boolean like here it checks if it includes @ and then return a boolean

// LESSON 8
// string slicing - creating substring from a portion of another string
// String.slice(StaticRange,end)
//It can be used when you dont want the full email you just want the usernames
// Eg.
// email.slice(0, email.indexOf("@"));

// LESSON 9
//Method chaining - calling one method after another in one continous line of code.

// let username = window.prompt("Enter the UserName" )
// //***No Method Chaining

// // username = username.trim();

// // let letter = username.charAt(0);
// // letter = letter.toUpperCase();

// // let extraChars = username.slice(1);
// // extraChars = extraChars.toLowerCase();
// // username = letter + extraChars;

// // console.log(username)

// //***Method Chaining
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// If a method chaining is too long it can confuse you to read

// LESSON 10
// Logical Operators = useed to combine or manipulate boolean values (true or false)
// AND = &&
// OR == ||
// NOT == !

// LESSON 11
// = Assignment Operator
// == comparison operator(compare if values are equal)
// === strict equality operator (compare if values & datatypes are equal)
// != inequality operator
// !== strict inequality operator

// LESSON 12
// // while loop = will repeat some code WHILE some condition is true
// let username = "";
// while (username.trim() === "" || username.trim() === null) {
//     // console.log('condition is true');
//     username = window.prompt('Enter your name');
// }
//  console.log(`Hellow ${username}`);
// // If one of the condition is true the code in while loop will keep on being executed until the condition is false so then the program will continue

// // do while - how it works is it executes the code for the first time and then it will continue executing again and again until the condition is false
// let username;
// do{
//     // console.log('condition is true');
//     username = window.prompt('Enter your name');
// }while (username.trim() === "" || username.trim() === null)
//  console.log(`Hellow ${username}`);

// DIFFERENCE
// while - starts with the condition
// do while - start with the code

// LESSON 13
// // for loop = repeat some code a LIMITED amount of times
// for(let i = 0; i<=20; i+=2){
//     console.log(i)
// }

//Using continue and break
// // continue - skippes an iteration in a loop
// for(let i = 0; i<=20; i++2){

//     if (i == 13) {
//         continue; // 13 is skipped
//     }else{
//         console.log(i)

//     }
// }

// // breack - breaks out of the loop intiery
// for(let i = 0; i<=20; i++){

//     if (i == 13) {
//         break; // the loop will be breaked at 13
//     }else{
//         console.log(i)

//     }
// }

// isNaN() - function to check if value is not a number

// // SIMPLE NUMBER GUESS APP
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//   guess = Number(guess);
//   // console.log(typeof guess, guess);
//   if (isNaN(guess) || guess < minNum || guess > maxNum) {
//     window.alert("Please enter a valid number");
//   } else {
//     attempts++;
//     if (guess < answer) {
//       window.alert("TOO LOW! try again!");
//     } else if (guess > answer) {
//       window.alert("TOO HIGH! try again!");
//     } else {
//       window.alert(
//         `CORRECT! The Answer is ${answer}. It took you ${attempts} attempts `
//       );
//       running = false;
//     }
//   }
// }
// // Funny

// LESSON 14
// Function - A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

// function happyBirthday(params) {
//     console.log("Happy birthday to you 1")
//     console.log("Happy birthday to you 2")
//     console.log("Happy birthday to you 3")
//     console.log(`You are ${age} years old`)
// }
// // Whet we run a program it currently doesent do anything so we gonna have to call it with paranthesis happyBirthday()
// //Note paranthesis  are like two telephones talking to each other
// happyBirthday();

// // You can send a function some values or valiables
// function happyBirthday(username , age) {
//   console.log("Happy birthday to you");
//   console.log(`Happy birthday dear ${username}`);
//   console.log("Happy birthday to you 3");
//   console.log(`You are ${age} years old`);
// }
// happyBirthday("BroCode", 25);
// happyBirthday("IAEFSEL", 20);
// //Note The order of the arguments matters

//return - Its used to send some data back to the place in which we call a function
// function add(x, y) {
//   let result = x + y;
//   return result;
//   //   return x + y; //ShortCut
// }
// let answer = add(2, 3);
// console.log(answer);
// Note
// When you return something from a function (return result) and after you resolve a function (add(2,3)) think of it like a value so you treat it like a value
//You can do for other subtration,m23ultiplication,and division

// // Seeng if Number is even number
// function isEven(number) {
// //   if (number % 2 === 0) {
// //     return true;
// //   } else {
// //     return false;
// //   }
//   // Or you can use ternary operator
//   return number % 2 === 0 ? true : false;
// }

// let thenumber = window.prompt("Enter Number");
// thenumber = Number(thenumber);

// // const verify = isEven(thenumber);
// // console.log(verify);
// console.log(isEven(thenumber)); //Shortcut

// // Seeng if the Email is Valid
// function isEmailValid(email) {
//     if (email.includes("@")) {
//         return true;
//     }else{
//         return false;
//     }
// }
// let email = window.prompt("Enter Email");
// console.log(isEmailValid(email)); //Shortcut
// // Or you can use ternary operator
// // return email.includes("@") ? true : false;
// //Shortcut  isEmailValid(email) ? "Valid Email" : "Invalid Email";

// LESSON 15
// // Variable scope = where a variable is recognized and accessible (local vs global)
// //You can reuse your variable name as long as they are on the different scope
// // Eg.
// function2()
// function function1(){
//     let x = 1;
//     console.log(x)
// }

// function function2(){
//     let x = 2;
//     console.log(x)
// }
// //these are different scopes because functions cant see inside other functions eg neighbouring houses you cant see inside your neighour house
// // they both are in localscope
// // but the grobalscope is outside of the function
// //Note if we have two variables in both scopes what will be used first is localscope

// // SIMPLE TEMPERATURE CONVERSION APP
// const textBox = document.getElementById("textbox");
// const toFahrenheight = document.getElementById("toFahrenheight");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert() {
//   if (toFahrenheight.checked) {
//     temp = Number(textBox.value);
//     temp = (temp * 9) / 5 + 32;
//     result.textContent = temp.toFixed(1) + " " + "Degrees of Fahrenheight"; //toFixed(1) gives us one decimal place
//   } else if (toCelsius.checked) {
//     temp = Number(textBox.value);
//     temp = (temp - 32) * (5 / 9);
//     result.textContent = temp.toFixed(1) + " " + "Degrees of Centigrade"; //toFixed(1) gives us one decimal place
//   } else {
//     result.textContent = "Select a unit";
//   }
// }

// LESSON 16
// Array = a variable like structure that can hold more than 1 value
// Eg.
// let fruit = ["apple", "orange", "banana"];

// //You can select things in an array using their index
// // Eg.
// console.log(fruit[0])

// //You can replace its value with another
// fruit[0] = 'meat';
// console.log(fruit[0])

// //You can access the elements of an array using a for loop`
// for (let i = 0; i < fruit.length; i++) {
//     const element = fruit[i];
//     console.log(element)
// }

// // Reverce
// for (let i = fruit.length - 1; i >=0; i--) {
//     const element = fruit[i];
//     console.log(element)
// }

// // enhanced for loop - sortcut to display the elements of an array
// for (const element of fruit) {
//     console.log(element)
// }
// NOTE GO TO LOOK FOR ARRAY METHODS IN JAVASCRIPT

//LESSON 17
// spread operator(...) = allows an iterable such as an array or string to be expanded into separate elements(unpack the elements)
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let max = Math.max(numbers); // here it will not work because it is an array and we need to use the spread operator to unpack the elements of an array
// console.log(max);

// //You can use the spread operator to unpack the elements of an array
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let max = Math.max(...numbers);
// console.log(max);

// //You can use the spread operator to copy an array
// let numbers2 = [...numbers];
// console.log(numbers2);

// Also you can
// let username ="BroCode";
// let letters = [...username].join("-");
// console.log(letters);

// // Also you can concatenate arrays and add new elements to the array
// let fruits1 = ["apple","banana","cherry"];
// let fruits2 = ["orange","pineapple","mango"];
// let fruits3 = [...fruits1,...fruits2,"mango","strawberry"];
// console.log(fruits3);

//LESSON 18
// rest parameters(...) = allows a function to work with a variable number of arguments by bundling them together into an array
// Difference between rest parameters and spread operator is that rest parameters is used to bundle the arguments into an array and the spread operator is used to unpack the elements of an array
// // Eg.
// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));
//Helps in accepting an unlimited number of arguments
// you can use rest parameter to stick all the arguments into an array
// // Eg.
// function display(...numbers) {
//   console.log(numbers);
// }
// display(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// you can combine them to display the values in an array
// // Eg.
// function display(...numbers) {
//   console.log(...numbers);
// }
// display(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// create simple function to sum the values of the arguments
// // Eg.
// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

//Average of the values of the arguments
// // Eg.
// function average(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total / numbers.length;
// }
// console.log(average(1,2,3,4,5,6,7,8,9,10));

// combining two strings into one
// // Eg.
// function combineStrings(str1, str2){
//     return str1 + str2;
// }
// console.log(combineStrings("Hello", "World"));

// RANDOM PASSWORD GENERATOR
// Eg.
// function generatePassword(length, includeLowercase = true, includeUppercase = true, includeNumbers = true, includeSpecial = true){
//     let password = "";
//     let lowercase = "abcdefghijklmnopqrstuvwxyz";
//     let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let numbers = "0123456789";
//     let special = "!@#$%^&*()";

//     let characters = "";
//     if(includeLowercase) characters += lowercase;
//     if(includeUppercase) characters += uppercase;
//     if(includeNumbers) characters += numbers;
//     if(includeSpecial) characters += special;

//     if(characters.length === 0){
//         return "Error: At least one character type must be included";
//     }

//     for(let i = 0; i < length; i++){
//         password += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return password;
// }
// console.log(generatePassword(10));

//LESSON 19
//callback = a function that is passed as an argument to another function

//used to handle asynchronous operations
//1.Reading a file
//2.Downloading a file
//3.Network requests
//4.Interacting with a database

// LESSON 20
// function declaration and function expression
// function declaration = define a reusable block of code that performs a specific task
// // Eg.
// function hello(){
//     console.log("Hellow");
// }

// // function expression = a way to define functions as values or variables
// const hello = function(){
//     console.log("Hello")
// }
// hello(); - its envrking right out
//You can also use it with setTimeout
// setTimeout(hello , 4000);

// // or you can pass an entire function as an argument
// setTimeout(function(){
//             console.log("Hello")
//         }, 5000
// )

//arrow function - a concise way to write function expressions good for simple functions that use only once (parameters) => some code
// const hello = () => console.log("Hellow")
// hello();

// *********************
//        OOP
// *********************

//LESSON 21
// objects - A collection of related properties and/or methods can represent real world objects (people, products, places)
//          object = {ket:value,
//                   function()}
// Note methods are just a function that belongs to an object and properties are things that an object caries such as age or name

// const person1 = {
//   firstname: "David",
//   lastname: "Modestus",
//   age: 20,
//   isEmployed: true,
//   sayHello: function name(params) {
//     console.log("Hii! Am David")
//   }
// };
// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.isEmployed);
// console.log(person1.sayHello())

// const person2 = {
//   firstname: "James",
//   lastname: "Modestus",
//   age: 24,
//   isEmployed: true,
//   sayHello: function name(params) {
//     console.log("Hii! Am James")
//   }
// };

// console.log(person2.firstname);
// console.log(person2.lastname);
// console.log(person2.age);
// console.log(person2.isEmployed);
// console.log(person2.sayHello())

//LESSON 22
// this - reference to the objects where   THIS is used (the object depends on the immediate context)
//        personalbar.name  = this.name
// // Eg.
// const person1 = {
//     firstname: "David",
//     lastname: "Modestus",
//     favFood: "All",
//     age: 20,
//     isEmployed: true,
//     sayHello: function () {
//       // console.log(`Hii! Am ${firstname}`) //here i cant see the property and if i want to see it i must preceed the property with "this"
//       console.log(`Hii! Am ${this.firstname}`) //aSo here we are using this within the context of person1(this is the reference to the object we are with in)
//       console.log(`Hii! my Fav Food is ${person1.favFood}`) // It will also be like person1.favFood
//     }
// }
// person1.sayHello();

// console.log(this) // If you just clg this property it gives you the window property and all its methods so as you can access them

// // Eg.
// console.log(this.alert("  Accessing Window Options using this operator"));

// But Note this operator doesent work with arrow functions
// // Eg.
// const person2 = {
//   firstname: "David",
//   lastname: "Modestus",
//   favFood: "All",
//   age: 20,
//   isEmployed: true,
//   sayHello: () => {
//     console.log(`Hii! Am ${this.firstname}`); //It Returns undefined tha is because when you use this operator to an arrow function its still making reference to that window object and in that window object there is no firstname so it returns (undefined)
//     console.log(`Hii! my Fav Food is ${person2.favFood}`);
//   },
// };
// person2.sayHello();

// lesson 23
// constructors = special methods for defining the properties and methods of objects

// In previous we have created the objects with properties and methods
// Eg.
// const person1 = {
//     firstname: "David",
//     lastname: "Modestus",
//     favFood: "All",
//     age: 20,
//     isEmployed: true,
//     sayHello: function () {
//       // console.log(`Hii! Am ${firstname}`) //here i cant see the property and if i want to see it i must preceed the property with "this"
//       console.log(`Hii! Am ${this.firstname}`) //aSo here we are using this within the context of person1(this is the reference to the object we are with in)
//       console.log(`Hii! my Fav Food is ${person1.favFood}`) // It will also be like person1.favFood
//     }
// }
// person1.sayHello();

// const person2 = {
//   firstname: "David",
//   lastname: "Modestus",
//   favFood: "All",
//   age: 20,
//   isEmployed: true,
//   sayHello: () => {
//     console.log(`Hii! Am ${this.firstname}`); //It Returns undefined tha is because when you use this operator to an arrow function its still making reference to that window object and in that window object there is no firstname so it returns (undefined)
//     console.log(`Hii! my Fav Food is ${person2.favFood}`);
//   },
// };
// person2.sayHello();

// This works but what if we need to create alot of objects it will be alot  of work thats why we need a constructor to construct these objects automatically
//All we have to do to create these objects is passing some unique data to the constructor to construct these objects
// // Eg.
// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
// }
//We are going to use function Car pay attention to the capitalization and then we will need to set up some parameters what are the properties we will accept
//To Assing these properties we are going to use the thid keyword dot make equals the make that we receive (this.make = make) same for the others
//So here our Car constructor is the reusable method where we can define the properties and methods of object we create

// // To use these constructor we will create an instance of an object
// const car1 =  new Car("Dodge","Challenge","2026","red") //Here we say new than our Car constructor and then we pass the argument values

// console.log(car1.make)
// console.log(car1.model)
// console.log(car1.year)
// console.log(car1.color)

// Now the Car method is reusable we will use it to create more other car objects

// // MAKE ARGUMENTS MORE READABLE and UNDERSTANDABLE
// function Car(a, b, c, d) {
//   this.make = a;
//   this.model = b;
//   this.year = c;
//   this.color = d;
// }
// const car1 = new Car("Dodge", "Challenge", "2026", "red");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// //NOW LETS ADD SOME METHODS
// function Car(a, b, c, d) {
//   this.make = a;
//   this.model = b;
//   this.year = c;
//   this.color = d;
//   this.drive = function(){console.log(`You Drive the ${this.model}`)}
// }
// const car1 = new Car("Dodge", "Challenge", "2026", "black");
// const car2 = new Car("Ford", "Mustang", "2027", "blue");
// const car3 = new Car("Chevrolet", "Camaro", "2028", "red");

// car1.drive();
// car2.drive();
// car3.drive();

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// lesson 24
// class  -  (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions
//           Eg.static keyword, encapsulation, inheritance

// class Product {
//   //to create a class we type class then the name of the object
//   constructor(name, price) {
//     //To use a constractor we use a constructor key word within our class
//     this.name = name;
//     this.price = price;
//   }

//   //now here we will create a function called displayProducts Note inside of a class you dont need the function keyword
//   displayProduct(){
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price}`);
//   }

//   //Here we are going to add a new method to calculate a total including task
//   calculateTotal(salesTax){
// return this.price + (this.price * salesTax);
//   }
// }

// const salesTax = 0.05;

// const product1 = new Product("shirt",19.99);
// const product2 = new Product("pants",22.50);
// product1.displayProduct();
// product2.displayProduct();

// const total1 = product1.calculateTotal(salesTax);
// const total2 = product2.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total1.toFixed(2)}`);
// console.log(`Total price (with tax): $${total2.toFixed(2)}`);

// Lesson 25
// // static - keyword that defines properties or methods that belong to a class itself rather than the objects created from that class(class owns anything static, not the objects)
// //So we gonna create a class for MathUtitility and we will create PI with static keyword
// class MathUtility {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }

//   static getArea(radius){
//     return this.PI * radius * radius ;
//   }
// }

// // if i want the static property i have to access it by its class
// console.log(MathUtility.PI);
// const MathUtility1 = new MathUtility(); //  I dont need an object to access a static property  xxx
// // Note anything declared as static belongs to the class it self not the objects created from that class
// console.log(MathUtility.getCircumference(10))
// console.log(MathUtility.getDiameter(10))
// console.log(MathUtility.getArea(10))

// // Example 2 Mix of regular properties and methods and static properties and methods
// //Now here we create of "User" and we will create a static variable to keep count on the amount of users we created "userCount"
// //Our constractor is going to be automatically called when we istantiete a new object we need a username also when we create a user we need to increase our userCount by one(1)
// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   sayHello() {
//     console.log(`Hellow my username is ${this.username}`);
//   }

// static getUserCount(){
//     console.log(`There are ${User.userCount} users online`)
// }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patric");
// const user3 = new User("Mr Crabs");
// console.log(user1.username);
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// console.log(user2.username);
// console.log(user3.username);
// // console.log(user1.userCount); // Here it will be undefined because the userCount is a static property it is only owned by the Class so we need to start with the class when calling it
// User.getUserCount()

// // Note The STATIC PROPERTY IS ONLY ACCESED STARTING WITH THE NAME OF THE CLASS

// // inheritance - allows a new class to inherit properties and methods from an existing class (parent -> child)
// //   helps with code reusability
// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   // but also the children can have their own properties and methods
//   run() {
//     console.log(`This ${this.name} is running`);
//   }
//   name = "rabbit";
// }

// class Fish extends Animal {
//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
//   name = "Shark";
// }
// class Bird extends Animal {
//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
//   name = "Falcon";
// }

// //If we create Rabbit,Fish and Bird object they will have acces to Animal
// const rabbit = new Rabbit();
// const fish = new Fish();
// const bird = new Bird();

// // rabbit.alive = false;
// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// LESSON 26
// // super - keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// // this = this.object
// // super = the parent

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     // this.name = name;
//     // this.age = age;
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`The ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     // this.name = name;
//     // this.age = age;
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`The ${this.name} can swim`);
//     super.move(this.swimSpeed);
//   }
// }
// class Bird extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     // this.name = name;
//     // this.age = age;
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`The ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
// }

// const rabbit1 = new Rabbit("Rabbit", 1, 25);
// const fish1 = new Fish("Rabbit", 2, 12);
// const bird1 = new Bird("Rabbit", 3, 50);
// //So when i run these program we have an uncaught reference must call super constructor in derived class
// //So what JS Told us is that before we use the this keyword in the constructor of children classes we have to call the constructor of the parent superclass super();
// //So one of the benefits of using constructors is that  any properties that the children all share in common we can send them all to the constructor of the parent
// //As you can see each and every children class have the name and the age property so we can send them to parent
// //Now we wil copy them to the parent constructor and then accept them as an argument then we need to pass them to the super constructor
// //So in here any object we create accepts three arguments a name , age and runSpeed/swimSpeed/flySpped and any property they share in common we can send them to the parent constructor which is name and age
// //This helps with code reusability

// console.log(rabbit1.name);
// console.log(rabbit1.age);
// console.log(rabbit1.runSpeed);

// // Another thing you can do with the super keyword is extend a method from the parent
// fish1.swim();
// rabbit1.run();
// bird1.fly();
// // We are also going to extend the move method of the parent "super.move(this.flySpeed)"

// // LESSON 27
// // getter = special method that makes a property readable
// // setter = special method that makes a property writeable

// //validate and modify a value when reading/writing a property

// // //Lets create a class of rectangle
// // class Rectangle{
// //     constructor(width , height){
// //         this.width = width;
// //         this.height = height;
// //     }
// // }

// // const rectangle = new Rectangle(-1000000,"pizza");

// // console.log(rectangle.width)
// // console.log(rectangle.height)
// //So here we have created a Rectangle object with width-"-1000000" and height-"pizza" which doesent make any sence
// //But we could use some  validation when creating an object because we dont want people to enter garbage values like -1000000 and pizza when we are expecting a positive number for width and height
// //That were getters and setters come in

// // //Starting with setters
// // class Rectangle {
// //   constructor(width, height) {
// //     this.width = width;
// //     this.height = height;
// //   }

// //   set width(newWidht) {
// //     if (newWidht > 0) {
// //       this._width = newWidht;//Using underscore tells other developers that thiss is a private property
// //     }else{
// //         console.error("Width must be a positive number");
// //     }
// //   }

// //   set height(newHeight) {
// //     if (newHeight > 0) {
// //       this._height = newHeight;
// //     }else{
// //         console.error("Height must be a positive number");
// //     }
// //   }
// // }

// // const rectangle = new Rectangle(3, 5);

// // console.log(rectangle.width);
// // console.log(rectangle.height);
// //Now is if we set all the width and height to positive number they still arent showing up
// // That is because this properties are writable via setters and not readable via getters]

// //ending with getters
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   //setters
//   set width(newWidht) {
//     if (newWidht > 0) {
//       this._width = newWidht; //Using underscore tells other developers that thiss is a private property
//     } else {
//       console.error("Width must be a positive number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height must be a positive number");
//     }
//   }

//   //getters
// ////With getters we can even add aditional logic
// //I would like to preserve the initial value of our width and height when i return their values i will give them toFixed method 1 and add centimeters
//   get width() {
//     return `${this._width.toFixed(1)}cm`;
//   }
//   get height() {
//     return `${this._height.toFixed(1)}cm`;
//   }

//   //Usign getters we can easily use the property accesser (.) to access a property that doesent nessesary exist
// //   Eg.
// get area(){
//     return `${(this._width * this._height).toFixed(1)}cm^2`;
// }
// }

// const rectangle = new Rectangle(3, 5);

// // //Now by using setters wi can even update those values latter
// // rectangle.width = 23;
// // rectangle.height= 20;

// //But if we update with values which are not required it will return the error and then return the inital values that we previously assigned
// rectangle.width = -121
// rectangle.height= "pizza";

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);//So now we can access area as if it was a property Our area isnt a property tachnically its not found within our constructor but we can access it as if it was a property with getter
// //Now they can be displayed





// LESSON 28
//destructuring = allows us to extract values from arrays and objects,
//   then assign them to variables in a convenient way
//   []-to perform array destructuring
//   {}-to perform object destructuring
//   5 examples

// Note:
// [ ] → arrays (position-based)
// { } → objects (key-based)

// //--------------EXAMPLE 1-----------------
// //SWAP THE VALUES OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a,b] = [b,a] // on the left side we are using destructuring on the right hand side we are creating a new array
// console.log(a); //so if you clg the values will be swaped 2 then 1
// console.log(b);


// //--------------EXAMPLE 2-----------------
// //SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ["red","green","blue","black","white"];
// //Suppose i would like to swap the position of the first(index 0) and the last(index 4) element

// [colors[0],colors[4]] = [colors[4],colors[0]]

// console.log(colors) //Thats why we can swap the elements in an array using destructuring



// //--------------EXAMPLE 3-----------------
// //ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red","green","blue","black","white"];

// const [firstColor,secondColor,thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


// //--------------EXAMPLE 4-----------------
// //EXTRACT VALUES FROM OBJECTS
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry Cook",
// }

// const person2 = {
//     firstName: "Patric",
//     lastName: "Star",
//     age: 34,
// }

// // const {firstName,lastName,age,job} = person1;
// // console.log(firstName);
// // console.log(lastName);
// // console.log(age);
// // console.log(job);

// const {firstName,lastName,age,job = "Unemployed"} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job); //Person2 doesnt have a job property but You can set default values when destructuring


// //--------------EXAMPLE 5-----------------
// //DESTRUCTURE IN FUNCTION PARAMETERS
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry Cook",
// }

// const person2 = {
//     firstName: "Patric",
//     lastName: "Star",
//     age: 34,
// }

// //Here we pass an object to the function and destructure it when its passed in
// function displayPerson({firstName , lastName , age , job = "Unemployed"}){ // when er receive person one as an argument we will destructure it also setted the default value of job property to be unemployed
// console.log(`name: ${firstName} ${lastName}`);
// console.log(`age: ${age}`);
// console.log(`job: ${job}`);
// }
// //so here am gonna envolce displayFunction and pass in person1 as an argument
// displayPerson(person1);



// // LESSON 29
// // nested objects - Object inside other objects.
// //                  Arrows you to represent more complex data structures
// //                  Child object is enclosed by Parent Object

// //                  Person{address{},ContactInfo{}}
// //                  ShoppingCart{keyboard{}, Mouse{}, Monitor{}}
// // Note: Objects can also contain arrays



// // const Person = {
// //     fullName: "Spongbob SquarePants",
// //     age: 30,
// //     isStudent: true,
// //     hobbies: ["karate", "JellyFishing", "Cooking"],
// //     address: {
// //         street: "124 Conch St.",
// //         city: "Bikini Bottom",
// //         country: "Int. Water",
// //     }
// // }

// // // Accessing Values
// // console.log(Person.fullName);
// // console.log(Person.age);
// // console.log(Person.isStudent);
// // console.log(Person.hobbies[0]);
// // console.log(Person.address.city);
// //So when accessing a property which is an array you use index and when accessing a property which is an object you use the dot operator twice

// // // Lopping throught the properties of a nested object
// // for(const property in Person.address){
// //     console.log(Person.address[property]);
// // }



// // NOW LETS MAKE SOMETHING A LITTLE BIT MORE COMPLEX
// //We are going to create a class that utilizes nested objects

// // Now we will create a person class and it will also have a constructor and we will need a name age and the address for the address am gonna use rest parameter
// // So as we can pass different parts of an address and store them in an array
// class Person {
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         //Now for the address we are going to construct an address object and we gonna call the constructor of our Address class and pass in (...address) which is utalized as spread operator
//         this.address = new Address(...address);
//     }
// }

// // Starting whith class Address our class will have a constructor for an address we need street,city and country then we will assign these properties
// class Address {
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }


// //Now lets construct some of these person objects
// const person1 = new Person("spongebob",30,"124 Conch St.",
//                                           "Bikini Bottom",
//                                           "Int. Waters");

// const person2 = new Person("Patrick",37,"128 Conch St.",
//                                             "Bikini Bottom",
//                                             "Int. Waters");

// const person3 = new Person("Squidward",45,"126 Conch St.",
//                                           "Bikini Bottom",
//                                           "Int. Waters");

// console.log(person1.address.country);


// LESSON 30
//Array of objects in javascript

// const fruits = [{ name: "apple", color: "red", calories: 95 },
// { name: "orange", color: "orange", calories: 45 },
// { name: "banana", color: "yellow", calories: 105 },
// { name: "coconut", color: "white", calories: 159 },
// { name: "pineapple", color: "yellow", calories: 37 }];

// // // Accessing a property wiithin any of these objects
// // console.log(fruits[0].name)

// *****ARRAY METHODS******
// push() - add new object in an array
// pop() - remove the last object in an array
// splice() - remove elements at certain indencies
// forEach() - loop through the elements of an array
// Map()  - run each element through a function and return a new array
// filter() - returns a new array after using each element and checking a condition
// reduce() - will return a single value
// sort() - method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order , not alphabetical
//          lexicographic = (alphabetical + numbers + symbols ) as string
//          Note: In sorting you can also use the localeCompare() method


// // LESSON 31
// //How to shuffle the elements of an array using javascript
// //Its optional but you may find this useful if you are interested to make a game using JS and any app where you need some randomness
// //We are going to create an array cards
// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, '3', 'Q', 'K'];

// // cards.sort(() => Math.random() - 0.5); // This method is mostly used to shuffle the elements of an array but when the larger the array becomes this method becomes increasevily more inefficient

// shuffle(cards); //envorking this array
// // Recomended - Fisher-Yates algorithm
// console.log(cards);
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i++) {
//         const random = Math.floor(random() * (i + 1)); //During the first iteration of these loop we should generate the random number btn the end and the beggining
//         //Then we swap the elements of an array so to swap the elements we will use destructuring
//         [array[i], array[random]] = [array[random], array[i]] //and that will swap the two elements of an array
//     }
// }

// // But its more recomended to use the dedicated shuffle function because you might need to use shuffle more than once



// LESSON 32
// // Date objects - objects that contain values that represent dates and times
//              //   These date objects can be changed and formatted to suit our needs
// //To do so lets create a const "date" then lets call the date constructor with the "new" keyword and passin no argument to the current date and time
// //So lets console it first
// const date1 = new Date();
// console.log(date1);

// //But if you want to create your own custom date and time object you can follow this order from the date constructor
// // Date(year, month, day, hour, minute, second, ms);
// // Eg.
// const date2 = new Date(2026, 3, 23, 3, 9, 18, 36);
// console.log(date2)

// // Passing in a string representation of time is also valid
// // Eg.
// const date3 = new Date("2025-03-03T12:00:00Z");
// console.log(date3)

//Another form that you can use is within the date pass in a given amount of time in milliseconds  since epic
//Epic - When the date your computer thinks time began
// Eg.
// const date4 = new Date(0); //mine got 1970 so i can pass amount of milliseconds since 1970
// console.log(date4)

// //You can extract individual values from a date object using methods
// // Eg.
// const date5 = new Date();

// //Year
// const year = date5.getFullYear();
// console.log(year)

// // Month
// const month = date5.getMonth();
// console.log(month)

// // Day
// const day = date5.getDate();
// console.log(day);

// // Hour
// const hour = date5.getHours();
// console.log(hour)

// //Minutes
// const minute = date5.getMinutes();
// console.log(minute)

// //Seconds
// const seconds = date5.getSeconds();
// console.log(seconds)

// //Day of week
// const dayOfWeek = date5.getDay();
// console.log(dayOfWeek)



// //With the date object you can even set the date
// const date6 = new Date();

// date6.setFullYear(2022);
// date6.setMonth(0);
// date6.setDate(1);
// date6.setHours(2);
// date6.setMinutes(3);
// date6.setSeconds(4);

// console.log(date6)



// //You Can Even Compare dates as well
// const date7 = new Date("2023-12-31");
// const date8 = new Date("2024-01-01");

// if(date8 > date7){
//     console.log("HAPPY NEW YEAR!")
// }





// LESSON 33
// // Closure - A function defined inside of another function,
// //   the inner function has access to the variables and scope of the outer function.
// //   Allow for private variables and state maintainance
// //   Used frequently in JS frameworks: React, Vue, Angular
// //   Especially when you work with function based components


// function outer() {

//     let message = "Hello";

//     function inner() {
//         console.log(message)
//     }

//     inner(); //So as for it to work we also need to envlke the inner function inside the outer function
// }

// // Trying to call the message outside
// message = "Goodbye";// nothing Happens Because its in different scope

// outer(); //envolking the outer function
// //So here we have a function inside a function and these inner function can access every thing inside the outer function

// //Its advantage is all the variable are considered private

// //Other Example - A closure can maintain a state of a variable
// function increment(){
//     let count = 0;
//     count++;
//     console.log(`Count Increased to ${count}`);
// }

// increment();
// increment();
// increment();

// Here is the normal function with count but any time i attempt to call it it just return count = 1
// so it means the count variable is redeclared and we keep on resetting it thats why we prefer using closure which would help to maintain the state of the variable


// // But we can just declare the variable outside of the function and it can work propery like this
// let count = 0;

// count = 100; //But it can be accesed and changed by an one (not private = no security)
// function increment() {
//     count++;
//     console.log(`Count Increased to ${count}`);
// }

// increment();
// increment();
// increment();

// // So am gonna enclose them in another function
// function createCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count Increased to ${count}`);
//     }

//     //We can also have multiple functions inside
//     //Lets create a function which outputs the count
//     function getCount(){
//         return count;
//     }

//     // return {increment:increment} // we will return an object of increment and its associated value will be a reference to increment function
//     return {increment, getCount}; //Or you can just say you are returning an Object with the method of increment which is the reference to the increment
// }

// const counter  = createCounter(); // this will return an object that has an increment method

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// //So lets try accessing it outside again
// console.log(counter.count); //It returns undifined so the variable is secured

// // now when we access getCount
// console.log(counter.getCount()); //we get it because it is allowed

// // Last Example
// function createGame() {
//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points) {
//         score -= points;
//         console.log(`-${points}pts`);
//     }

//     function getScore() {
//         return score;
//     }

//     return { increaseScore, decreaseScore, getScore };
// }

// const game = createGame(); //Here game will be our object and we assing envolking createGame()

// game.increaseScore(5); //So Now if we want to access it
// game.increaseScore(6);
// game.decreaseScore(3);

// console.log(`The final score is ${game.getScore()}pts`)




// LESSON 34
// setTimeout() - function in javascript that allows you to schedule the execution of a function
//    After an amount of time(milliseconds) Times are approximate (varies based on the workload of the Javascript runtime env.)
//    setTimeout(callback , delay);

// // Eg. Using CallBack Function
// function sayHello() {
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000)


// // Also ussing Anonimous Function
// setTimeout(function () {
//     window.alert("Hello");
// }, 3000);



// // Note
// // CALLBACK FUNCTION - A callback function is a function that is passed as an argument to another function and is executed later (usually after some task is done)
// // Eg.
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
//   }

//   function sayBye() {
//     console.log("Goodbye!");
//   }

//   greet("David", sayBye);
// sayBye is a callback function
// because it is passed to another function and called later.

// ****** WHILE *******

// // ANONYMOUS FUNCTION - An anonymous function is a function without a name.
// // Eg.
// const sum = function (a, b) {
//     return a + b;
// };

// //   Anonymous function used directly
// // Eg.
// (function () {
//     console.log("I run immediately");
// })();


// // clearTimeout() - can cancel the time out before it triggers clearTimeout(timeoutId);
// // Eg.
// const timeoutId = setTimeout(() => {
//     window.alert("Hello");
// }, 3000);

// clearTimeout(timeoutId);

// //Or other Example
// let timeOutId;

// function startTimer(){
//     timeOutId = setTimeout(() => {
//         window.alert("Hello");
//     }, 3000);
//     console.log("Started")
// }


// function endTimer(){
//     clearTimeout(timeOutId);
//     console.log("Ended")
// }



// // LESSON 35
// // Simple Digital Clock
// // DIGITAL CLOCK PROGRAM

// function updateClock() {
//     const now = new Date();

//     let hours = now.getHours();
//     const meridiem = hours >= 12 ? "PM" : "AM";

//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, "0");

//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     const seconds = now.getSeconds().toString().padStart(2, "0");

//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById("clock").textContent = timeString;
//   }

//   updateClock();
//   setInterval(updateClock, 1000);



// LESSON 36 - 7:16
//Simple Stop Watch Using JS



// // LESSON 37
// // ES6 Module - An external file that contains reusable code that can be imported into other Javascript FileSystem.
// //              Write reusable code for many different apps.
// //              Can contain variables, classes, functions... and more
// //              Introduced as part of ECMAScript 2015 update

// import { PI, getCircumference, getArea, getVolume } from './mathUtil.js';

// console.log(PI);

// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume  = getVolume(10);


// console.log(`${circumference.toFixed(2)}cm`)
// console.log(`${area.toFixed(2)}cm^2`)
// console.log(`${volume.toFixed(2)}cm^3`)



// LESSON 38
// synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for some operation to complete.


// asynchronous = Allows multitple operation to be performed concurrently without waiting
//                Doesen't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handle with: callbacks, Promises, Async/await

// // When we have three tasks the tasks are executed one after another
// // Eg.
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// //Here the execution occurs synchronous task 2 can not procceed if task 1 is not completed



// But in asynchronous programing it doesent block the execution of another so the program continues as normal even if its not finished its execution
// Eg.
// // ******CALLBACKS********
// setTimeout(() => console.log("Task 1"),2000)
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");

// //What if i need other tasks to be executed after task 1 is complete (Doing it synchronous)
// //Am gonna enclose both of them to the function

// function func1(callback) {
//     setTimeout(() => {
//         console.log("Task 1");
//         callback()
//     }, 2000) // so after task 1 is complete i will envoce my callback
// }

// function func2() {
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
//     console.log("Task 5");
// }

// func1(func2); //so i envolce func1 and pass in func2 as an argument

// //So thats one way we can handle asynchronous code



// LESSON 39
// Error = An Object that is created to represent a problem that occurs
// often with user input or establishing a connection
//  Eg.
// //TYPE ERROR
// console.leg("Hellow");

// console.log("You Have Reached the end");
// //Here there is type error it occurs when we try to access thing within an object that doesent exist
// //And the program didint finish executing so errors enterfere the normal flow of our program

// // REFERENCE ERROR
// console.log(X); //AN caught reference error because X Is not defined

// Erros can be generated fo also these issues
//NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS


// // Solution on how to handle these errors when they occur ( or when they are throughn by an error object)
// // try { } = Ecloses code that might potentially cause errors
// // catch { } = Catch and handle any thrown Errors from try { }
// // finnally { } = {optional} Always executes. Used mostly for clean up
// // ex. close files, close connections, release resources
// // Eg.
// try {
//     console.log(y);
// } catch (error) {
//     console.error(error.message);
// } finally { //Optionally you can add a finally block
//     console.log("This always executes");
// }


// // Also errors occurs when accepting user input because we dont know what the users gonna type in (a user could type in a malicious split)
// // Am going to create a constant for the dividend and the devisor

// try {
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));

//     if (divisor === 0) {
//         throw new Error("You cant divide by zero!");
//     } else if (isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("You must Enter a Number");

//     } else {
//         const result = dividend / divisor;
//         console.log(`The Answer is ${result}`);
//     }
// } catch (error) {
//     console.error(error.message);
// }
// console.log("You have reached the end")
// // Now mathematically you cant devide 1 by 0 it will be = infinity
// // So we can intentionary cause/throw new errors object and handle them  with try catch block if i try diviiding something by zero or enter value that is not a number
// //But as you can see we still reach to the end of the program where a have consoled "You have reached the end " meaning that the error is handled and the program keeps in executing



// // LESSON 40
// //SIMPLE CALCULATOR USING JAVASCRIPT
// // CALCULATOR PROGRAM

// const display = document.getElementById("display");

// function appendToDisplay(input) {
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     } catch (error) {
//         display.value = "Error";
//     }
// }
// // Here we first accessed id of "display" and there are three functions
// // First Function
// // appendToDisplay() - Helps to append the values the input area

// // Second Function
// // clearDisplay() = helps to clear the values in the input

// // Third Function
// // calculate - Helps to calculate the values of the display using eval() method




// LESSON 41
//*********************************** */
//*****DOCUMENT OBJECT MODEL(DOM)**** */
//*********************************** */
// DOM is the JS Object{} that represents the page you see in the web browser
// and provides you with an API to interact with it.
// Web Browser constructs the DOM  when it loads an HTML document
//  and structures all the elements in a tree-like representation.
// Javascript can access the DOM to dynamically
// You can change the content, structure, and style of a web page.


//Now with in the HTML Document there is the HTML element as the root element
//Inside it there is the head element and the Body Element and many more elements can be found inside each of them
//In Past examples we used the "document.getElementById()" to access the element by its ID\
// Eg.
// document.getElementById("david");

// // If you console document you will see your html document that is displayed in the browser
// console.log(document);

// // And if you say console.dir(document); - dir means directory this will list all the directories of these object
// console.dir(document);

// // Example am gonna change the title in my DOM
// document.title = "My website";

// // Also if i want to change the style of the document Eg background
// document.body.style.backgroundColor = "hls(0, 0%, 15%)"; //hue = 0 , satulation = 0%  , lightness = 50%
// //So here without css we can actually change the style of the page


// // Here i have accessed the element with id welcome-msg and have appended username if the username is empty then the string guest
// const username = "Bro Code";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `Guest` : username;




// LESSON 42
// element selectors = Methods used to target and manipulate HTML Elements
//                    They allow you to select one or multiple HTML Elements
//                    from the DOM (Document Object Model)

// 1.document.getElementById("david")             //ELEMENT OR NULL if its not found it returns null
// 2.document.getElementsByClassName("david")     //HTML COLLECTION
// 3.document.getElementsByTagName("h4")       //HTML COLLECTION
// 4.document.querySelector(".david")              //ELEMENT OR NULL - Here it will return the first match of class david you can also use things like Tagname , id and etc
// 5.document.querySelectorAll(".david")           //NODELIST - This returns a nodelist a nodelist is simiral to HTML Collection except it has built in methods
//How ever nodelists are static while HTML COLLECTION are live now since nodelists are static they do not update automatically but HTML COLLECTIONS updates automatically

// //Here we can access the style of the heading and style it
// const myHeading = document.getElementById("heading");
// myHeading.style.backgroundColor = "blue";
// myHeading.style.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");
// console.log(fruits); // Here it gives us all elements with class fruits

// // we can style the one we want using index if there is many elements which have that class
// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "green";
// fruits[2].style.backgroundColor = "orange";
// fruits[3].style.backgroundColor = "purple";


// //IF Id doesent exist it returns null
// const myHeadingo = document.getElementById("headingo");
// console.log(myHeadingo);

// //Seeing the built in methods for querySelectorAll()
// const allClass = document.querySelectorAll(".fruits");
// console.log(allClass);
// //Example of the built in function
// //entries
// //forEach
// //keys
// //values and etc





//LESSON 43
// DOM Navigation = The process of navigating through the structure of an HTML document using Javascript

//HTML elements include but not limited
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//------------- .firstElementChild -----------------

// const element = document.getElementById("vegetables");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// // Using querySelector all
// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
// })


//------------- .lastElementChild -----------------

// const element = document.getElementById("vegetables");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";



// // Using querySelector all
// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// })



//------------- .nextElementSibling ----- ------------

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// //Now is i select fruits it will style the vegetables because they are all simblings of the body and the vegetables is after fruits
// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";


//------------- .previousElementSibling ----- ------------
// Just like nextElementSibling just previous



//------------- .parentElement ----- ------------
// Selects their parent element

//------------- .children ----- ------------
// Selects the children element






// LESSON 44
// ADDING AND CHANGING HTML ELEMENTS IN JAVASCRIPT

// // STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1")


// // STEP 2 ADD ATTRIBUTE/PROPERTIES
// newH1.textContent = "I Like Pizza!"
// newH1.style.color = "tomato"; //Styling its color
// newH1.style.textAlign = "center";



// // STEP 3 APPEND ELEMENT TO DOM
// // // document.body.append(newH1); //You can also prepend so as it should be the first inside the body element
// // document.body.prepend(newH1);

// // //we can also append to the other parent element
// document.getElementById("box1").append(newH1);

// // //we can also insert Between Box1 and Box2
// // const box2 = document.getElementById("box2");
// // // document.body.insertBefore(newElement, currentElement);
// // document.body.insertBefore(newH1, box2); // Inshort we can say insert the newH1 before box2

// // //What if the elements dont have IDs we use querySelector of their class which is the same and their indexes
// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[2])

// // REMOVE HTML ELEMENT - if you need to remove the element you first need to find the location of that element
// // document.body.removeChild(newH1) //Note you need to select Proper location Example here the only element of newH1 which is going to be removed  is that which is the child of body not any other
// document.getElementById("box1").removeChild(newH1); //Or you can use the selector to select the parent of the element you need to remove its child and then removeChild then the name of the child you need to remove ID and etc


// // EXAMPLE
// const newListItem = document.createElement("li");

// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";

// // document.body.append(newListItem);
// // document.body.prepend(newListItem);
// // document.getElementById("fruits").append(newListItem);
// // document.getElementById("fruits").prepend(newListItem);


// // //Between Apple and Orange or before Orange
// // const orange = document.getElementById("orange");
// // document.getElementById("fruits").insertBefore(newListItem , orange)

// // what if element dont have IDs
// const listItems = document.querySelectorAll("#fruits li"); //We first select the id of fruits then select any list item disendent within this id 
// document.getElementById("fruits").insertBefore(newListItem , listItems[2])

// //Now Removing it
// document.getElementById("fruits").removeChild(newListItem);







// LESSON 45
// eventListener = Listen for specific event to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback or arrow function or anonimous function);


// //INTRO
// const myBox1 = document.getElementById("myBox1");
// //Note that the event parameter is provided to us by the browser when an event occurs eg when someone clicks the button
// //It also contains the informations about something that happened
// //We dont need to pass it in to the callback
// function changeColor(event){
//     console.log(event); //So if i CLG event i will fully see the information of the event eg target, type and etc
// }

// myBox1.addEventListener("click", changeColor);

// // Using CallBack Function
// const myBox1 = document.getElementById("myBox1");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH!"
// }

// myBox1.addEventListener("click", changeColor);



// //You dont nessesary need to pass in a callback function but you can also pass an anonimaous function
// // Using ANONIMOUS FUNCTION
// const myBox1 = document.getElementById("myBox1");

// myBox1.addEventListener("click", function (event) { //If you have a single parameter you dont need to enclose it inside the paranthesis  Eg.("click", event => {})
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH!"
// });

/****Mouse hover when oyu hover your mouse */
/********Mouseout when you live the box  */


// // Using external Button
// const button = document.getElementById("button");
// const myBox1 = document.getElementById("myBox1");

// button.addEventListener("click", function () { 
//     myBox1.style.backgroundColor = "tomato";
//     myBox1.textContent = "OUCH!"
// });

// button.addEventListener("mouseover", function () { 
//     myBox1.style.backgroundColor = "yellow";
//     myBox1.textContent = "dont click"
// });

// button.addEventListener("mouseout", function () { 
//     myBox1.style.backgroundColor = "lightblue";
//     myBox1.textContent = "Stay"
// });






// LESSON 46
// Intro to KEY EVENTS IN JS
// eventListener = Listen for specific event to create interactive web page  
//                 events: keydown, keyup, keypress
//                 document.addEventListener(event ,callback)
//A keydown occurs when you press down on a key
//A keyup occurs when you release a key 
//So by adding an event listener to the DOM document we can detect when we press down or release a key
// //Example
// document.addEventListener("keydown", event => {
//     // console.log(event);
//     console.log(`Key Down = ${event.key}`);
// });
// //So after here we go to the browser and press any key to our keyboard
// //In the console we will see the key we have placed and many more properties of the keyboardEvent object we just got from the webBrowser

// //Now if i would like to detect when i release a key
// document.addEventListener("keyup", event => {
//     console.log(`Key Up = ${event.key}`);
// });

// //Note
// //If you want to make like kind of a game the keydown and keyup can be applied
// const myBox1 = document.getElementById("myBox1");

// document.addEventListener("keydown", event => {
//     myBox1.textContent = "😮";
//     myBox1.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     myBox1.textContent = "😒";
//     myBox1.style.backgroundColor = "lightblue";
// });


// // Now we gonna move these element of myBox1 using the arrows keys in the keyboard
// const myBox2 = document.getElementById("myBox2");
// const moveAmount = 100;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     myBox2.textContent = "😮";
//     myBox2.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     myBox2.textContent = "😒";
//     myBox2.style.backgroundColor = "lightblue";
// });

// document.addEventListener("keydown", event => {

//     if (event.key.startsWith("Arrow")) {

//         //The arrow keys have a default behaviour to scroll so to prevent that we use preventDefault() method
//         event.preventDefault();

//         switch (event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;

//             case "ArrowDown":
//                 y += moveAmount;
//                 break;

//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;

//             case "ArrowRight":
//                 x += moveAmount;
//                 break;

//             default:
//                 break;
//         }

//         myBox2.style.top = `${y}px`
//         myBox2.style.left = `${x}px`
//     }
// });


// //Simple Program To Display and Hide Image
// const myButton = document.getElementById("button");
// const myImg = document.getElementById("myImage");


// myButton.addEventListener("click", event => {
//     if (myImg.style.display === "none") { //You can also use visibility Hidden and Visible
//         myImg.style.display = "block";
//         myButton.textContent = "Hide";

//     } else {
//         myImg.style.display = "none";
//         myButton.textContent = "Show";
//     }
// })





// LESSON 47
// NodeList = static collection of HTML elements by (id, class, elements)
//            Can be created by using querySelectorAll()
//            Simiral to an array, but no built in (Map, filter, reduce)
//            NodeList won't update to automatically reflect changes 
//Example: If you were to remove an element from the DOM and its in a NodeList you will have to also separately remove that element in the NodeList

// let buttons = document.querySelectorAll(".myButton");

// console.log(buttons); //Here we console the nodeList of Buttons
//Here there is a length property and some few methods

// //CHANGING HTML/CSS OF EACH ELEMENT WITHIN A NODELIST
// buttons.forEach(button => { //Here we access the buttons NodeList and use the built in Foreach method to access all the elements with in the NodeList 
//     button.style.backgroundColor = "green"; //Here we have changed the color of each button
//     button.textContent += "😒"//Here we have appended an emoji to each element in A NodeList
// });


// //In A simiral way we are going to add an EventListener to each button that will Listen to a Click
// buttons.forEach(buttonn => {
//     buttonn.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });


// //MOUSEOVER + MOUSEOUT event listener
// buttons.forEach(buttonnn => {
//     buttonnn.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     })
// })

// buttons.forEach(buttonnn => {
//     buttonnn.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "green";
//     })
// })


// //ADD AN ELEMENT to a NodeList
// const newButton = document.createElement("button"); //STEP 1
// newButton.textContent = "Button 5"; //STEP 2
// newButton.classList = "myButton";
// newButton.id = "button";
// document.body.appendChild(newButton); //STEP 3

// console.log(buttons); //Now here when we console buttons we see 4 NodeList not Five
// //That is Because NodeLists are static collection they wont update automatically to reflect changes to te DOM
// //Even though Button 5 is with in the DOM we 


// //  would need to Manually add it to our nodelist if we want to work with it
// //So do that we can use the querySelector  again to select  all elements by the class 
// buttons = document.querySelectorAll(".myButton");
// console.log(buttons);//So now Our NodeList Has Five Elements


// //REMOVE AN ELEMENT FROM A NODELIST WHEN YOU CLICK ON IT
// buttons.forEach(buttone => {
//     buttone.addEventListener("click", event => {
//     event.target.remove() //Here we accessed the event then its target then we used the remove method
//     console.log(buttons); //Here i saw that the elements are removed to the DOM But not to the NodeList so we do hav eto Update That Manually
//     buttons = document.querySelectorAll(".myButton")
//     console.log(buttons);//Now the elements are also Updated to the NodeList
//     })
// })




// LESSON 48
// classList = Element property in Javascript used to interact 
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across the webpage.

// // If I Have a CSS Class I can Dynamically 
// // add()
// // remove()
// // toggle(Remove if present, Add if not)
// // replace(oldClass, newClass)
// // contains() - If an element contains a class it will return True and If Not It will return false

// const myButton = document.getElementById("myButton");
// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {

//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "😒";
//     }else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// })

// //Now the Good thing about classlist is that we can reuse them Eg in other H1 Element
// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled");

// myH1.addEventListener("click", event => {

//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "😒";
//     }else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// })




// //Now Lets select all the buttons with in a Nodelist using let if we want to add or Remove Button and const If we want the number of Buttons Not To change
// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.classList.add("enabled");
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         if (event.target.classList.contains("disabled")) {
//             event.target.textContent += "😒";
//         } else {
//             event.target.classList.replace("enabled", "disabled");
//         }
//     })
// })





// //ROCK PAPER SCISSOR GAME Using JS
//  // ROCK PAPER SCISSORS
// const choices = ["rock", "paper", "scissors"];

// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");

// function playGame(playerChoice) {
//   const computerChoice = choices[Math.floor(Math.random() * 3)];
//   let result = "";

//   if (playerChoice === computerChoice) {
//     result = "IT'S A TIE!";
//   } 
//   else if (
//     (playerChoice === "rock" && computerChoice === "scissors") ||
//     (playerChoice === "paper" && computerChoice === "rock") ||
//     (playerChoice === "scissors" && computerChoice === "paper")
//   ) {
//     result = "YOU WIN!";
//   } 
//   else {
//     result = "YOU LOSE!";
//   }

//   playerDisplay.textContent = `Player: ${playerChoice}`;
//   computerDisplay.textContent = `Computer: ${computerChoice}`;
//   resultDisplay.textContent = result;
// }



// // IMAGE SLIDER
// // Bro Code style image slider 😎

// // select all images
// const slides = document.querySelectorAll(".slides");

// // keep track of current slide
// let slideIndex = 0;

// // show the first slide
// showSlide(slideIndex);

// // function to show slide
// function showSlide(index) {

//   // reset if index is out of range
//   if (index >= slides.length) {
//     slideIndex = 0;
//   }
//   if (index < 0) {
//     slideIndex = slides.length - 1;
//   }

//   // hide all slides
//   slides.forEach(slide => {
//     slide.style.display = "none";
//   });

//   // show current slide
//   slides[slideIndex].style.display = "block";
// }

// // next button
// function nextSlide() {
//   slideIndex++;
//   showSlide(slideIndex);
// }

// // previous button
// function prevSlide() {
//   slideIndex--;
//   showSlide(slideIndex);
// }






// //LESSON 49
// // callback Hell =  situation in Javascript where callbacks
// //                  are nested within other callbacks other callbacks to the
// //                  degree where the code is difficult to read.
// //                  Old pattern to handle asynchronous functions.
// //                  Use Promises + async/await to avoid callback Hell


// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 complete")
//         callback();

//     }, 2000)
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 complete")
//         callback();
//     }, 1000)
// }

// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 complete")
//         callback();
//     }, 3000)
// }

// function task4(callback) {
//     setTimeout(() => {
//         console.log("Task 4 complete")
//         callback();
//     }, 1500)
// }

// // task1();
// // task2();
// // task3();
// // task4();
// // console.log("All tasks complete");


// //Here the Code executes starting from "All tasks complete",task 2,4,1,3
// //So this is the problem with asynchronous code the  asynch functions can complete at any time and the rest of our Program doesent wait for them to finish So the order is changed

// //If i want them to be executed inorder each of the function can accept an parameter
// //We will take task one and pass in a callback to task 2
// task1(() => { //wat we wanna do when the task one is complete
//     task2(() => {
//         task3(() => {
//             task4(() => { console.log("All Tasks Completed") })
//         })
//     })
// })
// //This should walk now
// //So what we have done is use calllback Hell because we have nested callbacks inside of other callbacks if you have alot of tasks to complete an order this code can be completelly unmanagable
// //They should be atleast 4 if they are larger than that it will actually be callback Hell






// LESSON 50
// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value" - Its like says
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, rejected) => {asynchronous code}) - So we are going to create a new promise and inside there is an arrow function with two parameters resolve and reject then the asynchronous code

// DO THESE CHORES IN ORDER

// 1.WALK THE DOG
// 2.CLEAN THE KITCHEN
// 3.TAKE OUT THE TRASH

// //Example starting with CallBabks and then Promises
// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the dog");
//         callback();
//     }, 1500);
// }


// function clearKitchen(callback) {
//     setTimeout(() => {
//         console.log("You clean the kitchen");
//         callback();
//     }, 2500);
// }



// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("You take out the trash");
//         callback();
//     }, 500);
// }
// //So if I need to do these chores in order i would need to call CallBacks after walking the dog we will call a callback ti clean kichen and on going


// walkDog(() => {
//     clearKitchen(() => {
//         takeOutTrash(() => {
//             console.log("Tasks Completed")
//         })
//     })
// })
// //So this is by using callBack and if you have so many chores you will end up in callback hell and you don't need that
// //So what we will use instead is promises we will end up with all these async code we will wrap with in a promise and we dont need callBacks Instead of using CallBacks we will use method chaining 
// // Lets Do this Using The Formular Above
// function walkDog() {
//     return new Promise((resolve, reject) => { //So here we return a new object with resolve and reject parameters
//         setTimeout(() => {
//             resolve("You walk the dog"); //If our promise is resolved then we display the Message "You walk the dog" 
//         }, 1500);
//     });
// }

// function clearKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You clean the kitchen");
//         }, 2500);
//     });
// };


// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You take out the trash");
//         }, 500);
//     });
// }

// //So after returning the Promises we no longer need to use  callBack Hell instead we gonna use method Chaining
// //we will call teh walkDog function and then we gonna method chain following with the then function so we gonna take the resolved value in the walkDog promise and clg it then return the other function
// walkDog().then(value => {
//     console.log(value);
//     return clearKitchen()
// })
//     .then(value => {
//         console.log(value);
//         return takeOutTrash()
//     })
//     .then(value => {
//         console.log(value);
//         console.log("You have Finished all the Chores");
//     })

// //Now sometimes in asynchronous tasks the task may fail lets say we are trying to locate a resource/ file if we cant locate that file and we are using promises we dont want to resolve that file instead we want to reject 
// //That what happens when async function fails to do something when inside of promise 
// //So lets change our functions around
// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = true;
//             if (dogwalked) {
//                 resolve("You walk the dog");
//             } else {
//                 reject("You DIDN'T walk the dog")
//             }
//         }, 1500);
//     });
// }


// function clearKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;
//             if (kitchenCleaned) {
//                 resolve("You clean the kitchen");
//             } else {
//                 reject("You DIDN'T clean the kitchen")
//             }
//         }, 2500);
//     });
// };


// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = false;
//             if (trashTakenOut) {
//                 resolve("You take out the trash");
//             } else {
//                 reject("You DIDN'T take out the trash")
//             }
//         }, 500);
//     });
// }

// //Now if a promis emight reject then there is one method we need to add to the end of the chain that is catch() to catch any error
// walkDog().then(value => {
//     console.log(value);
//     return clearKitchen()
// })
//     .then(value => {
//         console.log(value);
//         return takeOutTrash()
//     })
//     .then(value => {
//         console.log(value);
//         console.log("You have Finished all the Chores");
//     })
//     .catch(error => console.error(error))

// //And if the first task was false we dont even need to resolve other tasks so the execution ends there




// LESSON 51
//  Async/Await = Async = makes a function return a Promise
//               Await = makes  an async function wait for a Promise

//               Allows you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everthing after Await is placed in an event queue

//   Lets start with Async
// In a sample program for the last topic we had some chores to do we have to walkDog, cleanKitchen, takeOutTrash each of these functions returns a promise 
// a promise that can either be resolved or rejected based on the code thats written if its true resolve if its false reject 

// now A function can be declared with async - A function which is declared with async will return a promise how ever that promise  that its returned doesent resolve or reject in a way you can say its an empty promise so the resolve and reject doesent work 
// Thats were await comes and by using this two key words together when calling all these async functions we dont need to method  chain then statements 
// There is a more synchronous manner which we can write the code but we will need to contain it all with in an async function

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = false;
//             if (dogwalked) {
//                 resolve("You walk the dog");
//             } else {
//                 reject("You DIDN'T walk the dog")
//             }
//         }, 1500);
//     });
// }


// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;
//             if (kitchenCleaned) {
//                 resolve("You clean the kitchen");
//             } else {
//                 reject("You DIDN'T clean the kitchen")
//             }
//         }, 2500);
//     });
// };


// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = true;
//             if (trashTakenOut) {
//                 resolve("You take out the trash");
//             } else {
//                 reject("You DIDN'T take out the trash")
//             }
//         }, 500);
//     });
// }


// async function doChores() {
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);

//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);

//         console.log("You finished all the chores!")
// }
// doChores()



// Note
// If you attempt to use await with in a function which is not async you will get an error
//Await makes async function wait for a promise before continuing


// // HANDLING ERROR HERE - Using tryCatch Block
// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalked = false;
//             if (dogwalked) {
//                 resolve("You walk the dog");
//             } else {
//                 reject("You DIDN'T walk the dog")
//             }
//         }, 1500);
//     });
// }


// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;
//             if (kitchenCleaned) {
//                 resolve("You clean the kitchen");
//             } else {
//                 reject("You DIDN'T clean the kitchen")
//             }
//         }, 2500);
//     });
// };


// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = true;
//             if (trashTakenOut) {
//                 resolve("You take out the trash");
//             } else {
//                 reject("You DIDN'T take out the trash")
//             }
//         }, 500);
//     });
// }


// async function doChores() {
//     try {  //We will surround all of these code within a try block then catch any error
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);

//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);

//         console.log("You finished all the chores!")
//     } catch (error) {
//         console.error(error)
//     }

// }
// doChores()


// LESSON 52
// JSON = (Javascript Object Notation) data-interchange format 
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3] or [{}, {}, {}, {}]

//        JSON.stringify() = converts a JS Object to a JSON STRING
//        JSON.parse() = converts a JSON string to a JS object


// // 1.JSON.stringify()
// //ON NAMES
// const names = ["Spongebob", "Patric", "Squidward", "Sandy"];
// console.log("names")
// console.log(names); //Here if we CLG Names before stringify we will get an array of strings

// const jsonString1 = JSON.stringify(names);//JSON is a built in object that is provided to us to walk with JSON files
// console.log("jsonString1")
// console.log(jsonString1);//Here if we the stringified names we get the one long string to represent the array

// console.log(".");
// console.log("FOR OBJECTS");
// console.log(".");


// //ON PERSON
// const person = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": [
//         "Jellifishing",
//         "Karate",
//         "Cooking"
//     ]
// }
// console.log("person")
// console.log(person)


// const jsonString2 = JSON.stringify(person);
// console.log("jsonString2");
// console.log(jsonString2);


// //PEOPLE
// const people = [
//     {
//         "name": "Spongebob",
//         "age": 30,
//         "isEmployed": true
//     },
//     {
//         "name": "Patric",
//         "age": 34,
//         "isEmployed": false
//     },
//     {
//         "name": "Squidward",
//         "age": 50,
//         "isEmployed": true
//     },
//     {
//         "name": "Sandy",
//         "age": 27,
//         "isEmployed": false
//     }
// ]

// console.log("people");
// console.log(people)

// const jsonString3 = JSON.stringify(people);
// console.log("jsonString3");
// console.log(jsonString3);





// // 2.JSON.parse()
// //ON NAMES
// const names2 = `["Spongebob", "Patric", "Squidward", "Sandy"]`;

// console.log("names2")
// console.log(names2);

// const jsonParse1 = JSON.parse(names2);
// console.log("jsonParse1")
// console.log(jsonParse1);


// //ON PERSON
// const person2 = `{
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": [
//         "Jellifishing",
//         "Karate",
//         "Cooking"
//     ]
// }`
// console.log("person2")
// console.log(person2)


// const jsonParse2 = JSON.parse(person2);
// console.log("jsonParse2");
// console.log(jsonParse2);


// //ON PEOPLE
// const people2 = `[
//     {
//         "name": "Spongebob",
//         "age": 30,
//         "isEmployed": true
//     },
//     {
//         "name": "Patric",
//         "age": 34,
//         "isEmployed": false
//     },
//     {
//         "name": "Squidward",
//         "age": 50,
//         "isEmployed": true
//     },
//     {
//         "name": "Sandy",
//         "age": 27,
//         "isEmployed": false
//     }
// ]`

// console.log("people2");
// console.log(people2)

// const jsonParse3 = JSON.parse(people2);
// console.log("jsonParse3");
// console.log(jsonParse3);


// // How to Fetch a JSON FILE using fetch()
// // fetch("") = //Fetch is a function as an argument we can pass in a relative or absolute file path or a URL
// //Lets say we need to get a JSON file of person
// fetch("people.json")
//     .then(rensponse => rensponse.json()) //Here we will take our responce and convert it to a json using json() function if i dont use json() it will return the whole responce but in axios it does it automatically
//     .then(value => console.log(value))

// //If you would like to iterate through all the objects in an array you just use foreach() function
// fetch("peoplee.json")
//     .then(rensponse => rensponse.json())
//     .then(values => values.forEach(value => {
//         console.log(value.age) //You can use dot operator to specify eg .age
//     }))
//     .catch(error => console.error(error)) // Also remember to catch error if there is one 





// LESSON 52
// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         simplifies asynchronous data fetching in Javascript and
//         used for interacting with APIs to retrieve and send 
//         data asynchronously over the web.
//         fetch(URL, {options})





// // ========== WEATHER APP (fetch) ==========
// // Uses Open-Meteo API (free, no API key): https://open-meteo.com/

// (function weatherApp() {
//     const cityInput = document.getElementById("weather-city");
//     const searchBtn = document.getElementById("weather-btn");
//     const errorEl = document.getElementById("weather-error");
//     const loadingEl = document.getElementById("weather-loading");
//     const cardEl = document.getElementById("weather-card");
//     const locationEl = document.getElementById("weather-location");
//     const tempEl = document.getElementById("weather-temp");
//     const descEl = document.getElementById("weather-desc");
//     const feelsLikeEl = document.getElementById("weather-feels-like");
//     const windEl = document.getElementById("weather-wind");
//     const humidityEl = document.getElementById("weather-humidity");
  
//     function showError(msg) {
//       errorEl.textContent = msg;
//       errorEl.hidden = false;
//       loadingEl.hidden = true;
//       cardEl.hidden = true;
//     }
  
//     function showLoading() {
//       errorEl.hidden = true;
//       loadingEl.hidden = false;
//       cardEl.hidden = true;
//     }
  
//     function showCard() {
//       errorEl.hidden = true;
//       loadingEl.hidden = true;
//       cardEl.hidden = false;
//     }
  
//     function weatherCodeToDesc(code) {
//       const codes = {
//         0: "Clear",
//         1: "Mainly clear",
//         2: "Partly cloudy",
//         3: "Overcast",
//         45: "Foggy",
//         48: "Depositing rime fog",
//         51: "Light drizzle",
//         53: "Drizzle",
//         55: "Dense drizzle",
//         61: "Slight rain",
//         63: "Moderate rain",
//         65: "Heavy rain",
//         71: "Slight snow",
//         73: "Moderate snow",
//         75: "Heavy snow",
//         80: "Slight rain showers",
//         81: "Rain showers",
//         82: "Violent rain showers",
//         95: "Thunderstorm",
//         96: "Thunderstorm with hail",
//         99: "Thunderstorm with heavy hail",
//       };
//       return codes[code] || "Unknown";
//     }
  
//     async function fetchWeather() {
//       const city = cityInput.value.trim();
//       if (!city) {
//         showError("Please enter a city name.");
//         return;
//       }
  
//       showLoading();
  
//       try {
//         // 1. Geocoding: city name -> latitude, longitude
//         const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
//         const geoRes = await fetch(geoUrl);
//         if (!geoRes.ok) throw new Error("Could not find location.");
//         const geoData = await geoRes.json();
//         if (!geoData.results || geoData.results.length === 0) {
//           showError("City not found. Try another name.");
//           return;
//         }
//         const { latitude, longitude, name, country } = geoData.results[0];
  
//         // 2. Weather: lat, lon -> current weather
//         const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`;
//         const weatherRes = await fetch(weatherUrl);
//         if (!weatherRes.ok) throw new Error("Could not load weather.");
//         const weatherData = await weatherRes.json();
//         const cur = weatherData.current;
  
//         locationEl.textContent = `${name}, ${country}`;
//         tempEl.textContent = `${Math.round(cur.temperature_2m)}°${weatherData.current_units?.temperature_2m || "C"}`;
//         descEl.textContent = weatherCodeToDesc(cur.weather_code);
//         feelsLikeEl.textContent = `Feels like ${Math.round(cur.apparent_temperature)}°`;
//         windEl.textContent = `Wind ${cur.wind_speed_10m} ${weatherData.current_units?.wind_speed_10m || "km/h"}`;
//         humidityEl.textContent = `Humidity ${cur.relative_humidity_2m}%`;
//         showCard();
//       } catch (err) {
//         showError(err.message || "Something went wrong. Try again.");
//       }
//     }
  
//     searchBtn.addEventListener("click", fetchWeather);
//     cityInput.addEventListener("keydown", function (e) {
//       if (e.key === "Enter") fetchWeather();
//     });
//   })();






// .
/*
 * =============================================================================
 *                    LESSON SUMMARY – JavaScript (BroCode)
 * =============================================================================
 *
 * 1.  Variables – Containers that store values.
 * 2.  Arithmetic operators – +, -, *, /, **, %; augmented assignment; increment/decrement; precedence.
 * 3.  User input – window.prompt vs HTML; type conversion (Number, String, Boolean).
 * 4.  Type conversion – Converting values between types; NaN, typeof.
 * 5.  const vs let – Constants vs reassignable variables.
 * 6.  Math object – PI, round, floor, ceil, trunc, pow, sqrt, random; random range; .checked.
 * 7.  String methods – charAt, indexOf, lastIndexOf, length, trim, toUpperCase, toLowerCase, repeat, startsWith, endsWith, replaceAll, padStart/padEnd, includes.
 * 8.  String slicing – slice() for substrings (e.g. username from email).
 * 9.  Method chaining – Calling methods in one continuous line.
 * 10. Logical operators – AND (&&), OR (||), NOT (!).
 * 11. Comparison – = vs == vs ===; != vs !==.
 * 12. while & do-while – Loops; difference (condition first vs code first).
 * 13. for loop – Limited repetitions; continue and break; number guessing game.
 * 14. Functions – Reusable code; parameters, return, examples (isEven, isEmailValid); temperature converter app.
 * 15. Variable scope – Local vs global; simple temperature app with DOM.
 * 16. Arrays – Multiple values; indexing; for loops; for...of.
 * 17. Spread operator – Unpack arrays/strings; copy, concatenate, Math.max.
 * 18. Rest parameters – Bundle arguments into array; sum, average; random password generator.
 * 19. Callbacks – Functions passed as arguments; async use (files, network, DB).
 * 20. Function declaration vs expression – function vs const fn = function; setTimeout; arrow functions.
 * 21. Objects – Properties and methods; real-world representation.
 * 22. this – Reference to current object; doesn't work with arrow functions.
 * 23. Constructors – Defining properties/methods of objects; new; reusable "classes".
 * 24. class (ES6) – Structured OOP; constructor, methods (e.g. Product, sales tax).
 * 25. static & inheritance – static = class-owned; extends; parent/child (e.g. Animal, Rabbit, Fish, Bird).
 * 26. super – Call parent constructor/methods from child class.
 * 27. Getters & setters – Read/write properties with validation.
 * 28. Destructuring – Extract from arrays/objects; swap, assign, defaults, function params.
 * 29. Nested objects – Objects inside objects; Person/Address; complex data.
 * 30. Array of objects – push, pop, splice, forEach, map, filter, reduce, sort.
 * 31. Shuffle array – Fisher–Yates; Math.random sort.
 * 32. Date objects – new Date(); get/set methods; compare dates.
 * 33. Closures – Inner function accessing outer scope; private state; counter/game examples.
 * 34. setTimeout / setInterval – Delayed execution; clearTimeout; callbacks vs anonymous functions.
 * 35. Digital clock – updateClock, setInterval.
 * 36. Stopwatch – Simple stopwatch with JS.
 * 37. ES6 modules – import/export; reusable code across files.
 * 38. Sync vs async – Sequential vs concurrent; callbacks for ordering.
 * 39. Errors – try/catch/finally; throw; TypeError, ReferenceError; user input validation.
 * 40. Calculator – DOM, appendToDisplay, clearDisplay, calculate (eval).
 * 41. DOM – Document Object Model; document, getElementById; title, body.style; welcome message.
 * 42. Element selectors – getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll.
 * 43. DOM navigation – firstElementChild, lastElementChild, next/previousElementSibling, parentElement, children.
 * 44. Adding/changing HTML – createElement, append, prepend, insertBefore, removeChild.
 * 45. Event listeners – click, mouseover, mouseout; addEventListener; event.target.
 * 46. Key events – keydown, keyup; move element with arrows; show/hide image.
 * 47. NodeList – querySelectorAll; forEach; static; add/remove elements.
 * 48. classList – add, remove, toggle, replace, contains; Rock Paper Scissors; image slider.
 * 49. Callback hell – Nested callbacks; use Promises/async-await instead.
 * 50. Promises – Pending → Resolved/Rejected; then/catch; chores example (walkDog, cleanKitchen, takeOutTrash).
 * 51. Async/await – Write async code in sync style; try/catch for errors.
 * 52. JSON & fetch – JSON.stringify, JSON.parse; fetch(URL); Weather app with Open-Meteo API.
 *
 * =============================================================================
 */

/*
 * =============================================================================
 *         RECOMMENDED NEXT LESSONS (not in BroCode list – learn separately)
 * =============================================================================
 *
 * 53. Map & Set – Map (key-value with any key type), Set (unique values);
 *     WeakMap, WeakSet; when to use instead of plain objects/arrays.
 *
 * 54. Symbol & BigInt – Symbol (unique keys, well-known symbols);
 *     BigInt for large integers; primitive types overview.
 *
 * 55. Regular Expressions (RegExp) – match(), test(), replace(); capture groups;
 *     character classes, quantifiers; validating strings (email, phone, etc.).
 *
 * 56. Optional chaining (?.) & nullish coalescing (??) – Safe property access;
 *     default values only for null/undefined; modern shorthand.
 *
 * 57. Hoisting – How var, let, const and function declarations are “moved”;
 *     temporal dead zone; why order of declaration matters.
 *
 * 58. Event loop & task queue – How sync/async run; microtasks vs macrotasks;
 *     order of setTimeout, Promises, queueMicrotask.
 *
 * 59. Event delegation – Attach one listener on parent; use event.target;
 *     dynamic lists; performance with many elements.
 *
 * 60. localStorage & sessionStorage – Persist data in browser; getItem, setItem,
 *     removeItem; same-origin; when to use which.
 *
 * 61. Debounce & throttle – Limit how often a function runs (resize, scroll,
 *     search input); improve performance and UX.
 *
 * 62. Recursion – Functions that call themselves; base case; factorial, tree
 *     traversal; when to prefer recursion vs loops.
 *
 * 63. Iterators & Generators – Iterable protocol, Symbol.iterator; for...of;
 *     generator functions (function*, yield); lazy sequences.
 *
 * 64. Proxy & Reflect – Intercept object operations (get, set, etc.); Reflect
 *     methods; validation, logging, reactive patterns.
 *
 * 65. AbortController – Cancel fetch() and other async operations; timeout
 *     and user cancellation; signal option.
 *
 * 66. requestAnimationFrame – Smooth animations; sync with display refresh;
 *     when to use instead of setInterval for animation.
 *
 * 67. Form APIs & validation – form.elements, submit, reset; HTML5 validation;
 *     Constraint Validation API; custom validation messages.
 *
 * 68. Intersection Observer – Detect when elements enter/leave viewport;
 *     lazy loading images, scroll animations, infinite scroll.
 *
 * 69. Web Workers – Run JS off the main thread; postMessage; heavy computation
 *     without blocking the UI.
 *
 * 70. Custom errors & Error handling – Extend Error class; custom messages and
 *     codes; best practices for throwing and catching.
 *
 * 71. Module patterns (IIFE, namespace) – Before ES modules; revealing module
 *     pattern; organizing code in older environments.
 *
 * 72. Intl (internationalization) – Intl.NumberFormat, Intl.DateTimeFormat,
 *     Intl.Collator; locales, formatting numbers/dates/strings.
 *
 * =============================================================================
 */
