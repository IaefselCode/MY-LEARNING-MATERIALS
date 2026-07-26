//What we can do with these type assertion and that is to
//Convert to more or less specific type that you start out with using "as" Operator
let a = "hello";
let b = a; //Less specific type
let c = a; //more specific type
// Besides as operator we can also use angle brackets
let d = "world"; //So d is going to have a value word and its a type string
let e = "world";
// Note: These angle brackets cannot be used in REACT JS
// HOW TO USE ASSERTIONS
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// Also TS checks when it can eg
// 10 as string
// (10 as unknown) as string //Double casting meaning 2 assertions  ITS NOT REALLY ADVICED BECAUSE IT OVERRULES TS just like any type
// Assertions can be very usefull with
//THE DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img'); //Will not work inTSX files for react
// const myImg = document.getElementById('#img')! //To remove null we can use the non null assertion '!' at the end
// do not use ! and as at the same time
img.src;
myImg.src;
export {};
