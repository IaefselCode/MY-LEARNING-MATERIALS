console.log('v');
console.log('v');
console.log('v');   
console.log('*****CLASSES*****');

//CLASSES
//So ES6 classes is a syntactical sugar over constructor functions and prototypes
//So it makes it easier to create objects and deal with inheritance
//Eg
class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Barnes & Noble';
    }
}

//Instantiate an object
const book8 = new Book('Book Eight', 'Johnny Doe', '2022');
console.log(book8); //output = Book {title: 'Book Eight', author: 'Johnny Doe', year: '2022'}

book8.revise('2024');
console.log(book8); //output = Book {title: 'Book Eight', author: 'Johnny Doe', year: '2024', revised: true}
console.log(book8.getAge()); //output = Book Eight is 2 years old
console.log(book8.getSummary()); //output = Book Eight was written by Johnny Doe in 2024


//Static method
console.log(Book.topBookStore()); //output = Barnes & Noble
//So static methods are called without instantiating their object and cannot be called through a class instance
//So we cannot call it like this
// console.log(book8.topBookStore()); //output = Uncaught TypeError: book8.topBookStore is not a function