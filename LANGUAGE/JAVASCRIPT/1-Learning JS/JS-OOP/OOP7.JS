console.log("v");
console.log("v");
console.log("v");
console.log("*****SUB-CLASS*****");

//SUB-CLASS
//So ES6 classes is a syntactical sugar over constructor functions and prototypes
//So it makes it easier to create objects and deal with inheritance
//Eg
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//Instantiate an object
const book8 = new Book("Book Eight", "Johnny Doe", "2022");
console.log(book8); //output = Book {title: 'Book Eight', author: 'Johnny Doe', year: '2022'}

// book8.revise("2024");
console.log(book8); //output = Book {title: 'Book Eight', author: 'Johnny Doe', year: '2024', revised: true}
// console.log(book8.getAge()); //output = Book Eight is 2 years old
console.log(book8.getSummary()); //output = Book Eight was written by Johnny Doe in 2024

//Static method
// console.log(Book.topBookStore()); //output = Barnes & Noble
//So static methods are called without instantiating their object and cannot be called through a class instance
//So we cannot call it like this
// console.log(book8.topBookStore()); //output = Uncaught TypeError: book8.topBookStore is not a function

//SUB-CLASS
//Lets create a Magazine sub-class that extends the Book class
//For react developer this is very familiar
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year); //So we need to call the parent constructor using super keyword
    this.month = month;
  }
}

//Instantiate Magazine object
const mag1 = new Magazine("Mag One", "Jane Doe", "2021", "Jan");
console.log(mag1);
console.log(mag1.getSummary()); //output = Mag One was written by Jane Doe in 2021

//So we can see that the Magazine class has access to the Book class methods
//So this is how inheritance works in ES6 classes
//So Magazine is a sub-class of Book class
//And Book is the parent class of Magazine class

// so this is alot easier to understand and work with than the prototype based inheritance

//Its also leary good to understand and it can be alot overwhelming at first
//But once you get the hang of it its really easy to work with

//Alot of modern JS frameworks and libraries use ES6 classes
//So its really important to understand how they work