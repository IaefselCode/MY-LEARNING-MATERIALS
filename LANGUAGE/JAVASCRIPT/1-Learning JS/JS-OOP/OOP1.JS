//WHAT WE ARE LEARNING
// 1.Object Literals
//2.ES5 Constructor functions and prototypes
//3.Inheritance
//4.Object Create Method
//5.ES6 Classes
//6.Subclasses

//FIRST JUST SOME CLEAR UNDERSTANDING
// When it comes to objects in JS basically we have an object we can either call a property on it or a method on it
//Eg
// Object.property //like a string ana array and etc
// Object.method()

//In many languages the OOP is mostly used but in JS not most of it is OOP
//Like in JS you can use methods on a string
//Eg
const s1 = 'Hello';
console.log(s1.toUpperCase())//This one now is an object because we have added a method to the string of 's1'
                            //So JS added a wrapper to it and it becomes an object

// HELLO //output


//And you can also create strings as objects 
// Eg
//Looking at their types
const s2 = 'Hello';
console.log(typeof s2); //output = string

const s3 = new String('Hello');
console.log(typeof s3); //output = object

// so like when we add to uppercase in the previous what it doing is s3 behind the scene 
// i mean it creates a new string and it makes it toupper case
//So it will be known as an object

//SO THAT MAKES SENSE 

//And we also have the DOM Object like the "window" so thats actuall a parent object to see that console it
console.log(window);

//It has alot of methods Like alert
// eg
// window.alert('Hello World');
//or we can just call alert directly since its a method of window and window is the global object or parent object
// alert('Hello World');

// Other methods of window are
console.log(navigator.appVersion); //gives the version of the browser
//So this is a property of the navigator object which is a property of the window object

                          //****OBJECT LITERALS****
//So now lets create our own object
//Eg
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',

    //We can also add methods to the object
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// OUTPUTS
//Accessing the method of the object
console.log(book1.getSummary()); //output = Book One was written by John Doe in 2013

//We can also access the properties of the object
console.log(book1.title); //output = Book One //We can access the property like this using dot notation
//or
console.log(book1['title']); //output = Book One //We can also access the property like this


//What if we need to access all the values of the object
console.log(Object.values(book1)); //output = ['Book One', 'John Doe', '2013', ƒ] //We can use Object.values() method to get all the values of the object

//And we can also get the keys of the object
console.log(Object.keys(book1)); //output = ['title', 'author', 'year', 'getSummary'] //We can use Object.keys() method to get all the keys of the object



