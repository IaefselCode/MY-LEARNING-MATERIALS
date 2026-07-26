console.log('v');
console.log('v');
console.log('v');   
console.log('*****OBJECT OF PROTOS*****');
//OBJECT OF PROTOS
//So in the previous example we have seen how to create objects using constructor functions and prototypes
//But there is another way to create objects using Object.create() method
//Eg
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

//So now we can create objects using Object.create() method
const book6 = Object.create(bookProtos);
book6.title = 'Book Six';
book6.author = 'Jack Doe';
book6.year = '2010';

console.log(book6); //output = {title: 'Book Six', author: 'Jack Doe', year: '2010'}

// WE also can do it like this
const book7 = Object.create(bookProtos, {
    title: {value: 'Book Seven'},
    author: {value: 'Jill Doe'},
    year: {value: '2011'}
});
console.log(book7); //output = {title: 'Book Seven', author: 'Jill Doe', year: '2011'}
console.log(book7.getSummary()); //output = Book Seven was written by Jill Doe in 2011
console.log(book7.getAge()); //output = Book Seven is 13 years old