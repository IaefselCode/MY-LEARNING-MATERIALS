// ********Type Aliaces********
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active?: boolean;
  album: stringOrNumberArray;
};
//Here we are using a type aliace inside another type aliace

type userId = stringOrNumber;
//So here we are creating TS aliaces or names for our TS types and use them

// Now here comes the diff with an interface because we cannot do this with interface
//So thing of enterface as object or class and type as an aliase for anytype in TS








// ********Literal types************
let myName: "Dave"; //Here i have assigned my name to dave not string and other types

// Its most useful when you want only a certain expected values and mostly used with union
// Eg.
let username: "Dave" | "John" | "Amy";
username = "Amy";
// username = 'lecho' //Wont work

// Note:
// ALIACES HELPS TO KEEP YOUR CODE MORE DRY - I means no repetitions in your code









//************************************** */
// ************FUNCTIONS*******************
//************************************** */

const add = (a: number, b: number): number => {
  //So here a function accepts a number in the parameters and also returns a number
  return a + b;
};
// console.log(add(2, 8));

const logMsg = (logMsg: any): void => {
  //It returns void because these function doesnot return anything we just logged the logMsg unlike the add function
  console.log(logMsg);
};
// logMsg("Hello!");
// logMsg(add(2, 3));
// logMsg("Hello!");

let subtract = function (c: number, d: number): number {
  return c - d;
};

//So as you can see the add and subtract function have the same types so am gonna create the type which can be used for these functions
type mathFuc = (a: number, b: number) => number; //So here its the type of the function thats accepts numbers parameters and returns a number

// So if we are to create another math function we could use it
let multiply: mathFuc = function (c, d) {
  return c * d;
};
logMsg(multiply(2, 2));

// // with Interface
// interface mathFuc{
//   (a: number, b: number):number;}









//**********Optional Parameters**********/
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
// logMsg(addAll(2,3,5))

// Note:
// If you have an optional parameter it needs to be the last in the list
// Here we have to put in a type guard using if remember to inlude undefined

// So we can also use default value of c if its not supplied or not optional
// Eg.
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

// logMsg(sumAll(2,3))
// logMsg(sumAll(undefined,2))

// Now if you remember the math function which simplifies types we cannot do that here
// Because default values wont work








// *********Rest Parameters***********
//Also means the rest of the parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9));
// Also note if you want to add new parameter make sure that the rest parameter is at the end











/**********The "never" this is for functions which throughs errors***************/
//Meaning never return
// Eg.
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

//It will also be a never type if a function returns an infinite loop
const infinite = (): never => {
  let i: number = 1;
  while (true) {
    i++;
    // if (i > 100) break;
  }
};
//So if you have the never type in your function is either your function throughs error or there is an infinite loop in your function

//So some places we can use it
//custom typeGuard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

//use of the never type
const numberOfString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This Should Never Happen !!!");
};
//So as you can see here TS needs an explicity return not only type Guards and we dont have one so we use createError
//Also when we are using type Guards we might also need to create a custom typeGuard for that

// console.log("Hellow");

// Here we have covered functions, literal types, type aliaces and the never type