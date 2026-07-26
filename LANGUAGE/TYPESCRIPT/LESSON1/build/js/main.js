let username = "David Modestus Paul Mbwatila";
console.log(username);
let a = 12;
let b = '6';
let c = 2;
//CHAPTER 1 - START HERE
// // what we are suppose todo adding EXPLICIT TYPES
// let a: number = 12;
// let b: number = 6;
// let c: number = 2;
console.log(a / b);
// Here its not good in TS because it is static typed but in JS it could bring 2 because JS doesent mind the data coersion btn 12 and '6' which is a string
// So JS just corhesed the data into the type it wanted
//But for Typescript   We can solve this in tsconfig by allowing noEmitOnError to true that any code that TypeScript doesent like will not be compiled
//You can also use the terminal when watching by typing tsc --noEmitOnError -w
console.log(c * b);
export {};
