
console.log('v');
console.log('v');
console.log('v');   
console.log('*****INHERITANCE*****');
// //ES6 CLASSES
// //So ES6 classes is a syntactical sugar over constructor functions and prototypes
// //So it makes it easier to create objects and deal with inheritance
// //Eg
function Book2(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book2.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

function Magazine(title, author, year, month){
    Book2.call(this, title, author, year);
    this.month = month;
}

//Inherit Prototypes
Magazine.prototype = Object.create(Book2.prototype);
//Now if we call mag1.getSummary() it will work

//Instantiate Magazine object
const mag1 = new Magazine('Mag One', 'John Smith', '2018', 'Jan');
console.log(mag1); //output = Magazine {title: 'Mag One', author: 'John Smith', year: '2018', month: 'Jan'}

//Use Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary()); //output = Uncaught TypeError: mag1.getSummary is not a function