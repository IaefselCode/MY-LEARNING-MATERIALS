// let stringArr = ["new", "dav", "mode"];
let evh = {
    name: "David",
    active: true,
    album: ["Iaefsel", "David.dev", 45],
};
let JP = {
    name: "Jimmy",
    active: false,
    album: [2817, "Jimmy47", 45],
};
console.log(evh, JP);
// evh = JP  //true even if one type is optional
// evh.year = 2026; //It cannot work because the years doesent exist in the Guitarist types that was predefined so we cant just add its
// How it Works with functions
const greetGuitarist = (guitarist) => {
    return `Hellow ${guitarist.name?.toUpperCase()}!`;
};
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
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 2] = "U";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
export {};
//So in enum they are enumerated from zero 0
//And if you want to change them you can just assing to the number you want and those following will adopt
// SO HERE WE HAVE COVERED ARRAYS, TUPLES, OBJECT AND ENUMS
