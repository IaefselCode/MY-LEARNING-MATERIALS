let myName: string;
let age: number;
let isLoading: boolean;
let album: any; //This will some how defeat typescript because you enter any datatype
let myStatus: string | number; //A union-type

myName = "David";
age = 19;
isLoading = true;
album = "Ushozzoh";
myStatus = "FullStack Developer";

console.log(myName);
console.log(age);
console.log(isLoading);
console.log(album);
console.log(myStatus);

const sum = (a: number, b: string) => {
  console.log(a + b);
};

let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g