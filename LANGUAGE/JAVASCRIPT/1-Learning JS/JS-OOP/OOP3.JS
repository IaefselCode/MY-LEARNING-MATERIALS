//PROTOTYPES
console.log('v');
console.log('v');
console.log('v');   
console.log('*****PROTOTYPES*****');
//So every function in JavaScript has a prototype property which is an object
//And we can add methods to the prototype property of the constructor function
//Eg
function Book2(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}


//Instead of adding the method to the constructor function like this
// this.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }
//we can add the method to the prototype property of the constructor function
//Adding method to the prototype property of the constructor function 
Book2.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//Instantiate an object
const book5 = new Book2('Book Five', 'Jill Doe', '2015');
console.log(book5);

//Its now stored in the prototype property of the constructor function
//And the reason is we do want a title author and year for every book object
//But we dont want a getSummary method for every book object
//So we add it to the prototype property of the constructor function
//So its more efficient

// Exanple of adding more methods to the prototype property of the constructor function
Book2.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}
console.log(book5.getAge()); //output = Book Five is 9 years old

//This one we manipulates the year property of the object
Book2.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

console.log(book5)
book5.revise('2024');
console.log(book5); //output = Book2 {title: 'Book Five', author: 'Jill Doe', year: '2024', revised: true}



// // //Accessing the method of the object we can call it like this using dot notation with the object name
// // console.log(book5.getSummary()); //output = Book Five was written by Jill Doe in 2015
// // console.log(book5); //output = Book2 {title: 'Book Five', author: 'Jill Doe', year: '2024', revised: true}
// // console.log(book5.getAge()); //output = Book Five is 0 years old
// // //So now we have added methods to the prototype property of the constructor function
// // //And the methods are not created for each object which is more efficient
// // //And we can also see the prototype property of the object
// // console.log(book5.__proto__); //output = {getSummary: ƒ, getAge: ƒ, revise: ƒ}
// // console.log(Object.getPrototypeOf(book5)); //output = {getSummary: ƒ, getAge: ƒ, revise: ƒ}
// // console.log(book5 instanceof Book2); //output = true
// // //So the prototype property is an object that contains the methods that we added to the constructor function
// // //And we can access the prototype property of the object using __proto__ or Object.getPrototypeOf() method
// // //And we can also check if the object is an instance of the constructor function using instanceof operator
// // //So that is a brief introduction to constructor functions and prototypes in JavaScript
// // //In the next video we will look at ES6 classes which is a syntactical sugar over constructor functions and prototypes
// // //So it makes it easier to create objects and deal with inheritance
// //So see you in the next video



// console.log('v');
// console.log('v');
// console.log('v');   
// console.log('*****ES6 CLASSES*****');
// //ES6 CLASSES
// //So ES6 classes is a syntactical sugar over constructor functions and prototypes