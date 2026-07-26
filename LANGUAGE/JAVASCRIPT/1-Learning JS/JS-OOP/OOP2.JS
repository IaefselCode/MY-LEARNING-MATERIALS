//CONSTRUCTOR FUNCTIONS
console.log('v');
console.log('v');
console.log('v');
console.log('*****CONSTRUCTOR FUNCTIONS*****');
//But what if we want to create multiple objects like book2, book3 and etc
//We can do that butclg it will be a lot of code repetition
//So we can use constructor functions to create multiple objects
//CONSTRUCTOR FUNCTIONS
//So a constructor function is a function that we use to create multiple objects
//Eg
//Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//Instantiate an object
const book2 = new Book('Book Two', 'Jane Doe', '2016');
const book3 = new Book('Book Three', 'Jim Doe', '2018');
console.log(book2);
console.log(book3);

//So now we have created multiple objects without code repetition
//And we can also add methods to the constructor function
//Eg
function Book1(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Instantiate an object
const book4 = new Book1('Book Four', 'Jake Doe', '2020');
console.log(book4);
//Accessing the method of the object we can call it like this using dot notation with the object name
console.log(book4.getSummary()); //output = Book Four was written by Jake Doe in 2020


//But the problem with this approach is that if we create multiple objects using the constructor function
//The method will be created for each object which is not efficient
//So to solve this problem we can use prototypes