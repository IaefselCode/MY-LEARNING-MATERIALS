// let stringArr = ["new", "dav", "mode"];

// let guitar = ["Strat", "Les Paul", 123];

// let mixedData = ["ENV", 1944, true];

// stringArr[0] = "red";

// console.log(stringArr);
// stringArr.push("34");

// guitar[0] = 34;
// guitar.push(67);
// guitar.unshift("Ushizzoh");
// console.log(guitar);

// let test = [];
// let bands: string[] = [];
// bands.push("Van Hallen");
// bands.unshift("34");
// console.log(bands);








// //*************Tuple*****************
// let myTuple: [string, number, boolean] = ["dave", 42, true];

// let mixed = ["james", 43, false];

// // mixed = my Tuple

// // myTuple = mixed





// //********Objects**********
// let myObject: object;
// myObject = [];
// console.log(typeof myObject);

// myObject = bands;
// myObject = {};

// const exampleObj = {
//   prop1: "Dave",
//   prop2: true,
// };

// exampleObj.prop2 = 42;

//SPECIFYING THE TYPES OF AN OBJECT
// type Guitarist = {
//   name: string;
//   active?: boolean;
//   album: (string | number)[];
// };

// you can also use interface instead of type
interface Guitarist {
  name?: string;
  active?: boolean;
  album: (string | number)[];
}

let evh: Guitarist = {
  name: "David",
  active: true,
  album: ["Iaefsel", "David.dev", 45],
};

let JP: Guitarist = {
  name: "Jimmy",
  active: false,
  album: [2817, "Jimmy47", 45],
};

console.log(evh, JP);

// evh = JP  //true even if one type is optional
// evh.year = 2026; //It cannot work because the years doesent exist in the Guitarist types that was predefined so we cant just add its

// How it Works with functions
const greetGuitarist = (guitarist: Guitarist) => {
return `Hellow ${guitarist.name?.toUpperCase()}!`
}
console.log(greetGuitarist(JP));

// Now here if we make the name optional and we call it to a function we are also suppose to use optional chaining because the value may possibly be undefined

// //Or we could check using if condition
// const greetGuitarist = (guitarist: Guitarist) => {
//   if (guitarist.name) {
//     return `Hellow ${guitarist.name.toUpperCase()}!`;
//   }
//   return "Hellow!";
// };
// console.log(greetGuitarist(evh));






//********Enums ********/
// Unlike most typescript features, Enums are not a type level addition to Javascript but something
//Added to the language and runtime
enum Grade{
  U = 2,
  D,
  C,
  B,
  A
}
console.log(Grade.U)
//So in enum they are enumerated from zero 0
//And if you want to change them you can just assing to the number you want and those following will adopt

// SO HERE WE HAVE COVERED ARRAYS, TUPLES, OBJECT AND ENUMS