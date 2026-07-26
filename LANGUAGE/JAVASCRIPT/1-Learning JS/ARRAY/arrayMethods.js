//***JAVASCRIPT ARRAY METHODS */
// Arrow function
function func(parameter) {
    return 'Something' + parameter;
}

// same as
const func = (parameter) => {
    return 'Something' + parameter;
}

// same as
const func = (parameter) => 'Something' + parameter;

//***Push method */
//It is used to add one or more elements to the end of an array
//It changes the original array
//It returns the new length of the array

// syntax
const newLength = array.push(element1, element2, ...);
// example
const fruits = ['apple', 'banana'];
const newLength1 = fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength1); // 3



//***Pop method */
//It is used to remove the last element from an array
//It changes the original array
//It returns the removed element

// syntax
const removedElement = array.pop();
// example
const fruits1 = ['apple', 'banana', 'orange'];
const removedFruit = fruits1.pop();
console.log(fruits1); // ['apple', 'banana']
console.log(removedFruit); // 'orange'



//***Unshift method */
//It is used to add one or more elements to the beginning of an array
//It changes the original array
//It returns the new length of the array

// syntax
const newLength = array.unshift(element1, element2, ...);
// example
const fruits2 = ['banana', 'orange'];
const newLength2 = fruits2.unshift('apple');
console.log(fruits2); // ['apple', 'banana', 'orange']
console.log(newLength2); // 3




//***Shift method */
//It is used to remove the first element from an array
//It changes the original array
//It returns the removed element

// syntax
const removedElement = array.shift();
// example
const fruits3 = ['apple', 'banana', 'orange'];
const removedFruit1 = fruits3.shift();
console.log(fruits3); // ['banana', 'orange']
console.log(removedFruit1); // 'apple'




//***indexOf method */
//It is used to find the index of the first element in an array that meets a certain condition
//It does not change the original array
//It returns the index of the first element that meets the condition or -1 if no element meets the condition

// syntax
const foundIndex = array.indexOf(element);
// example
const numbers4 = [1, 2, 3, 4, 5];
const foundIndex1 = numbers4.indexOf(3);
console.log(foundIndex1); // 2




//****foreach method****/
// is the simplest way to iterate over an array
//It is used to execute a provided function once for each array element

// syntax
array.forEach(element => {
    //code to be executed
});
//the element parameter is the current element being processed in the array ,It can be named anything and it repeats for each element in the array it is optional

// example
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number);
});





//****map method****/
//It is used to create a new array from an existing array by applying a function to each element of the original array
//It does not change the original array
//It returns a new array

// syntax
const newArray = array.map(element => {
    //code to be executed
    return element; //return the modified element
});





//****filter method****/
//It is used to create a new array from an existing array by filtering out elements that do not meet a certain condition
//It does not change the original array
//It returns a new array

// syntax
const newArray1 = array.filter(element => {
    //code to be executed
    return condition; //return true or false
});

// example
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
const oddNumbers = numbers1.filter(number => number % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]





// ****concat method****/
//It is used to merge two or more arrays
//It does not change the original array
//It returns a new array
// syntax
const newArray2 = array1.concat(array2, array3, ...);
// example
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray = array1.concat(array2, array3);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//with values
const mergedArray1 = array1.concat(4, 5, 6);
console.log(mergedArray1); // [1, 2, 3, 4, 5, 6]
const mergedArray2 = array1.concat(array2, 7, 8, 9);
console.log(mergedArray2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]




// ****find method****/
//It is used to find the first element in an array that meets a certain condition
//It does not change the original array
//It returns the first element that meets the condition or undefined if no element meets the condition

// syntax
const foundElement = array.find(element => {
    //code to be executed
    return condition; //return true or false
});

// example
const numbers3 = [1, 2, 3, 4, 5];
const foundNumber = numbers3.find(number => number > 3);
console.log(foundNumber); // 4
const notFoundNumber = numbers3.find(number => number > 5);
console.log(notFoundNumber); // undefined




//****findIndex method */
//It is used to find the index of the first element in an array that meets a certain condition
//It does not change the original array
//It returns the index of the first element that meets the condition or -1 if no element meets the condition

// syntax
const foundIndex = array.findIndex(element => {
    //code to be executed
    return condition; //return true or false
});

// example
const numbers4 = [1, 2, 3, 4, 5];
const foundIndex1 = numbers4.findIndex(number => number > 3);
console.log(foundIndex1); // 3
const notFoundIndex = numbers4.findIndex(number => number > 5);
console.log(notFoundIndex); // -1   




//****indexof method */
//It is used to find the index of the first occurrence of a specified element in an array
//It does not change the original array
//It returns the index of the first occurrence of the specified element or -1 if the element is not found

// syntax
const index = array.indexOf(element, start);


// example
const numbers5 = [1, 2, 3, 4, 5, 3];
const index1 = numbers5.indexOf(3);
console.log(index1);
    // 2
const index2 = numbers5.indexOf(3, 3);
console.log(index2);




//****lastIndexOf method*/
//It is used to find the index of the last occurrence of a specified element in an array
//It does not change the original array
//It returns the index of the last occurrence of the specified element or -1 if the element is not found

// syntax
const lastIndex = array.lastIndexOf(element, start);


// example
const numbers6 = [1, 2, 3, 4, 5, 3];
const lastIndex1 = numbers6.lastIndexOf(3);
console.log(lastIndex1);
    // 5
const lastIndex2 = numbers6.lastIndexOf(3, 3);
console.log(lastIndex2);
    // 2


     
//****some method*/
//It is used to test whether at least one element in the array passes the test implemented by the provided function
//It does not change the original array
//It returns a boolean value

// syntax
const result = array.some(element => {
    //code to be executed
    return condition; //return true or false
});

// example
const numbers7 = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers7.some(number => number % 2 === 0);
console.log(hasEvenNumber);
    // true

const hasNumberGreaterThan5 = numbers7.some(number => number > 5);
console.log(hasNumberGreaterThan5);
    // false


//****every method*/
//It is used to test whether all elements in the array pass the test implemented by the provided function
//It does not change the original array
//It returns a boolean value

// syntax
const allPass = array.every(element => {
    //code to be executed
    return condition; //return true or false
});

// example
const numbers8 = [1, 2, 3, 4, 5];
const allEvenNumbers = numbers8.every(number => number % 2 === 0);
console.log(allEvenNumbers);
    // false
const allNumbersLessThan6 = numbers8.every(number => number < 6);
console.log(allNumbersLessThan6);
    // true



//****includes method*/
//It is used to determine whether an array includes a certain element
//It does not change the original array
//It returns a boolean value
// syntax
const includesElement = array.includes(element, start);


// example
const numbers9 = [1, 2, 3, 4, 5];
const includes3 = numbers9.includes(3);
console.log(includes3);
    // true
const includes6 = numbers9.includes(6);
console.log(includes6);
    // false



//****push method*/
//It is used to add one or more elements to the end of an array
//It changes the original array
//It returns the new length of the array
// syntax
const newLength = array.push(element1, element2, ...);

// example
const numbers10 = [1, 2, 3, 4, 5];
const newLength1 = numbers10.push(6);
console.log(newLength1);


//****unshift method */
//It is used to add one or more elements to the beginning of an array
//It changes the original array
//It returns the new length of the array
// syntax
const newLength2 = array.unshift(element1, element2, ...);  

// example
const numbers11 = [1, 2, 3, 4, 5];
const newLength3 = numbers11.unshift(0);
console.log(newLength3); // 6  
console.log(numbers11); // [0, 1, 2, 3, 4, 5]


//****pop method****/
//It is used to remove the last element from an array
//It changes the original array
//It returns the removed element
// syntax
const removedElement = array.pop();

// example
const numbers12 = [1, 2, 3, 4, 5];
const removedElement1 = numbers12.pop();
console.log(removedElement1);
// 5
console.log(numbers12); 
// [1, 2, 3, 4]



//****shift method*/
//It is used to remove the first element from an array
//It changes the original array
//It returns the removed element
// syntax
const removedElement2 = array.shift();

// example
const numbers13 = [1, 2, 3, 4, 5];
const removedElement3 = numbers13.shift();
console.log(removedElement3);
// 1
console.log(numbers13); 
// [2, 3, 4, 5]



//****tostring method*/
//It is used to convert an array to a string
//It does not change the original array
//It returns a string
// syntax
const string = array.toString();
// example
const numbers14 = [1, 2, 3, 4, 5];
const string1 = numbers14.toString();
console.log(string1); 
// "1,2,3,4,5"



//****join method****/
//It is used to convert an array to a string by joining all elements of the array with a specified separator
//It does not change the original array
//It returns a string
// syntax
const string2 = array.join(separator);
// example
const numbers15 = [1, 2, 3, 4, 5];
const string3 = numbers15.join("-");
console.log(string3);
// "1-2-3-4-5"
const string4 = numbers15.join(" ");
console.log(string4); 
// "1 2 3 4 5"


 
//****fill method****/
//It is used to fill all elements of an array with a specified value
//It changes the original array
//It returns the modified array
//end index is not included
// syntax
const filledArray = array.fill(value, start, end);  
// example
const numbers16 = [1, 2, 3, 4, 5];
const filledArray1 = numbers16.fill(0);
console.log(filledArray1);
// [0, 0, 0, 0, 0]
const numbers17 = [1, 2, 3, 4, 5];
const filledArray2 = numbers17.fill(0, 2, 4);
console.log(filledArray2); 
// [1, 2, 0, 0, 5]



 
//****copyWithin method****/
//It is used to copy a part of an array to another location in the same array
//It changes the original array
//It returns the modified array
//end index is not included
// syntax
const modifiedArray = array.copyWithin(target, start, end);
// example
const numbers18 = [1, 2, 3, 4, 5];
const modifiedArray1 = numbers18.copyWithin(0, 3);
console.log(modifiedArray1);
// [4, 5, 3, 4, 5]
const numbers19 = [1, 2, 3, 4, 5];
const modifiedArray2 = numbers19.copyWithin(0, 3, 4);
console.log(modifiedArray2); 
// [4, 2, 3, 4, 5]


//****slice method****/
//It is used to create a new array by extracting a part of an existing array
//It does not change the original array
//It returns a new array
//end index is not included
// syntax
const newArray3 = array.slice(start, end);
// example
const numbers20 = [1, 2, 3, 4, 5];
const newArray4 = numbers20.slice(1, 4);
console.log(newArray4);
// [2, 3, 4]
const newArray5 = numbers20.slice(2);
console.log(newArray5); 
// [3, 4, 5] 

 

//****splice method****/
//It is used to add or remove elements from an array
//It changes the original array
//It returns an array containing the removed elements
//end index is not included
// syntax
const removedElements = array.splice(start, deleteCount, item1, item2, ...);

// example
const numbers21 = [1, 2, 3, 4, 5];
const removedElements1 = numbers21.splice(2, 2);
console.log(removedElements1);
// [3, 4]
console.log(numbers21);
// [1, 2, 5]
const numbers22 = [1, 2, 3, 4, 5];
const removedElements2 = numbers22.splice(2, 0, 6, 7);
console.log(removedElements2);
// []
console.log(numbers22);
// [1, 2, 6, 7, 3, 4, 5]
const numbers23 = [1, 2, 3, 4, 5];
const removedElements3 = numbers23.splice(2, 2, 6, 7);
console.log(removedElements3);
// [3, 4]
console.log(numbers23);
// [1, 2, 6, 7, 5]



//****sort method****/
//It is used to sort the elements of an array in place and returns the sorted array
//It changes the original array
//It returns the sorted array
// syntax
const sortedArray = array.sort((a, b) => {
    //code to be executed
    return a - b; //return a negative value if a should come before b, a positive value if a should come after b, or 0 if they are equal
});
// example
const numbers24 = [5, 3, 8, 1, 4];
const sortedArray1 = numbers24.sort((a, b) => a - b);
console.log(sortedArray1);
// [1, 3, 4, 5, 8]
const sortedArray2 = numbers24.sort((a, b) => b - a);
console.log(sortedArray2); 
// [8, 5, 4, 3, 1]

// how it works
>0 // b comes before a
<0 // a comes before b 
===0 // no change

// sort by default converts elements to strings and compares their sequences of UTF-16 code unit values
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); 
// ["Apple", "Banana", "Mango", "Orange"]
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); 
// ["Orange", "Mango", "Banana", "Apple"]



//****reverse method****/
//It is used to reverse the order of the elements in an array
//It changes the original array
//It returns the reversed array 
// syntax
const reversedArray = array.reverse();
// example
const numbers25 = [1, 2, 3, 4, 5];
const reversedArray1 = numbers25.reverse();
console.log(reversedArray1); 
// [5, 4, 3, 2, 1]
const reversedArray2 = reversedArray1.reverse();
console.log(reversedArray2); 
// [1, 2, 3, 4, 5]
  


//****from method****/
//It is used to create a new array from an array-like or iterable object
//It does not change the original array
//It returns a new array
//it can also take a map function as a second argument to modify the elements of the new array
//it can also take a thisValue as a third argument to use as this when executing the map function
// Not to another array-like object

// syntax
const newArray6 = Array.from(arrayLike, mapFunction, thisValue);
// example
const str = "Hello";
const newArray7 = Array.from(str);
console.log(newArray7);
// ["H", "e", "l", "l", "o"]
const set = new Set([1, 2, 3, 4, 5]);
const newArray8 = Array.from(set);
console.log(newArray8);
// [1, 2, 3, 4, 5]
const newArray9 = Array.from([1, 2, 3, 4, 5], x => x * 2);
console.log(newArray9); 
// [2, 4, 6, 8, 10]
const newArray10 = Array.from([1, 2, 3, 4, 5], function (x) {
    return x * this.multiplier;
}, { multiplier: 3 });
console.log(newArray10); 
// [3, 6, 9, 12, 15]




//****isArray method****/
//It is used to determine whether a value is an array
//It does not change the original array
//It returns a boolean value
// Not to another array-like object
// syntax
const isArray = Array.isArray(value);
// example
console.log(Array.isArray([1, 2, 3]));
// true
console.log(Array.isArray("Hello"));
// false
console.log(Array.isArray({ name: "David" }));
// false
console.log(Array.isArray(new Array()));
// true
console.log(Array.isArray([]));
// true
console.log(Array.isArray(null));
// false
console.log(Array.isArray(undefined));
// false
console.log(Array.isArray(123));
// false
console.log(Array.isArray({}));
// false
console.log(Array.isArray(function () { }));
// false
console.log(Array.isArray(NaN));
// false
console.log(Array.isArray(true));
// false
console.log(Array.isArray(false));
// false
console.log(Array.isArray(new Set()));
// false
console.log(Array.isArray(new Map()));
// false
console.log(Array.isArray(new WeakSet()));
// false
console.log(Array.isArray(new WeakMap()));
// false



//****valueOf method****/
//It is used to return the primitive value of an array
//It does not change the original array
//It returns the primitive value of the array
// syntax
const primitiveValue = array.valueOf();
// example
const numbers26 = [1, 2, 3, 4, 5];
const primitiveValue1 = numbers26.valueOf();
console.log(primitiveValue1);
// [1, 2, 3, 4, 5]
console.log(primitiveValue1 === numbers26);
// true



//****entries method****/
//It is used to return a new Array Iterator object that contains the key/value pairs for each index in the array
//It does not change the original array
//It returns a new Array Iterator object
// syntax
const iterator = array.entries();
// example
const numbers27 = [1, 2, 3, 4, 5];
const iterator1 = numbers27.entries();
for (const [index, value] of iterator1) {
    console.log(index, value);
}
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5
const iterator2 = numbers27.entries();
console.log(iterator2.next().value);
// [0, 1]
console.log(iterator2.next().value);
// [1, 2]
console.log(iterator2.next().value);
// [2, 3]
console.log(iterator2.next().value);
// [3, 4]
console.log(iterator2.next().value);
// [4, 5]
console.log(iterator2.next().value);
// undefined

// getting all values using spread operator
const numbers28 = [1, 2, 3, 4, 5];
const iterator3 = numbers28.entries();
const allEntries = [...iterator3];
console.log(allEntries);
// [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]




//****keys method****/
//It is used to return a new Array Iterator object that contains the keys for each index in the array
//It does not change the original array
//It returns a new Array Iterator object
// syntax
const iterator4 = array.keys();
// example
const numbers29 = [1, 2, 3, 4, 5];
const iterator5 = numbers29.keys();
for (const key of iterator5) {
    console.log(key);
}
// 0
// 1
// 2
// 3
// 4
const iterator6 = numbers29.keys(); 
console.log(iterator6.next().value);
// 0
console.log(iterator6.next().value);
// 1
console.log(iterator6.next().value);
// 2
console.log(iterator6.next().value);
console.log(iterator6.next().value);
// 3
console.log(iterator6.next().value);
// 4
console.log(iterator6.next().value);
// undefined  

// getting all keys using spread operator
const numbers30 = [1, 2, 3, 4, 5];
const iterator7 = numbers30.keys();
const allKeys = [...iterator7];
console.log(allKeys);
// [0, 1, 2, 3, 4]
 


//****value method****/
//It is used to return a new Array Iterator object that contains the values for each index in the array
//It does not change the original array
//It returns a new Array Iterator object
// syntax
const iterator8 = array.values();
// example
const numbers31 = [1, 2, 3, 4, 5];
const iterator9 = numbers31.values();
for (const value of iterator9) {
    console.log(value);
}
// 1
// 2
// 3
// 4
// 5
const iterator10 = numbers31.values();
console.log(iterator10.next().value);
// 1
console.log(iterator10.next().value); 
// 2
console.log(iterator10.next().value);
// 3
console.log(iterator10.next().value);
console.log(iterator10.next().value);
// 4
console.log(iterator10.next().value);
// 5
console.log(iterator10.next().value);
// undefined
// getting all values using spread operator
const numbers32 = [1, 2, 3, 4, 5];
const iterator11 = numbers32.values();
const allValues = [...iterator11];
console.log(allValues);
// [1, 2, 3, 4, 5]



//****reduce method****/
//It is used to reduce an array to a single value by applying a function to each element of the array
//It does not change the original array
//It returns a single value

// syntax
const singleValue = array.reduce((accumulator, currentValue) => {
    //code to be executed
    return accumulator + currentValue; //return the modified accumulator
}, initialValue);

//the accumulator parameter is the accumulated value previously returned in the last invocation of the callback or initialValue, it is optional
//the currentValue parameter is the current element being processed in the array
//the initialValue parameter is a value to be used as the first argument to the first call of the callback, if no initialValue is supplied the first element in the array will be used and skipped
// example
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15
const product = numbers2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // 120



//****reduceRight method****/
//It is used to reduce an array to a single value by applying a function to each element of the array from right to left
//It does not change the original array
//It returns a single value
// syntax
const singleValue1 = array.reduceRight((accumulator, currentValue) => {

    //code to be executed
    return accumulator + currentValue; //return the modified accumulator
}, initialValue);

// example
const numbers33 = [1, 2, 3, 4, 5];
const sum1 = numbers33.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum1); // 15
const product1 = numbers33.reduceRight((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product1); // 120




//****flat method****/
//It is used to flatten a nested array
//It does not change the original array
//It returns a new array
// syntax
const flattenedArray = array.flat(depth);
// example
const nestedArray = [1, 2, [3, 4], [5, 6]];
const flattenedArray1 = nestedArray.flat();
console.log(flattenedArray1);
// [1, 2, 3, 4, 5, 6]
const deeplyNestedArray = [1, 2, [3, 4, [5, 6]]];
const flattenedArray2 = deeplyNestedArray.flat(2);
console.log(flattenedArray2); 
// [1, 2, 3, 4, 5, 6]

// with depths
const deeplyNestedArray1 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const flattenedArray3 = deeplyNestedArray1.flat(3);
console.log(flattenedArray3);
// [1, 2, 3, 4, 5, 6, 7, 8]
const flattenedArray4 = deeplyNestedArray1.flat(2);
console.log(flattenedArray4);
// [1, 2, 3, 4, 5, 6, [7, 8]]
const flattenedArray5 = deeplyNestedArray1.flat(1);
console.log(flattenedArray5);
// [1, 2, 3, 4, [5, 6, [7, 8]]]
const flattenedArray6 = deeplyNestedArray1.flat(0);
console.log(flattenedArray6);
// [1, 2, [3, 4, [5, 6, [7, 8]]]]

 

//****flatMap method****/
//It is used to map each element of an array to a new array and then flatten the result into a single array
//It does not change the original array
//It returns a new array        
// syntax
const newArray11 = array.flatMap(element => {
    //code to be executed
    return [element, element * 2]; //return the modified element as an array
});
// example
const numbers34 = [1, 2, 3, 4, 5];
const newArray12 = numbers34.flatMap(number => [number, number * 2]);
console.log(newArray12);
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
//End of JAVASCRIPT ARRAY METHODS



                                  SHORTLY
// 🔹 Adding / Removing Elements

// push() → Add item(s) to end.

// pop() → Remove last item.

// unshift() → Add item(s) to start.

// shift() → Remove first item.

// splice(start, deleteCount, ...items) → Add/remove items at specific position.


// 🔹 Searching & Checking

// includes(value) → Checks if value exists → true/false.

// indexOf(value) → First index of value (or -1).

// lastIndexOf(value) → Last index of value (or -1).

// find(callback) → First item that matches condition.

// findIndex(callback) → Index of first matching item.

// some(callback) → true if at least one item matches.

// every(callback) → true if all items match.


// 🔹 Iterating

// forEach(callback) → Runs function on each item (no return).

// map(callback) → Transforms each item → returns new array.

// filter(callback) → Returns new array with items that match.

// reduce(callback, initialValue) → Reduces array to a single value.

// reduceRight(callback, initialValue) → Same, but from right to left.


// 🔹 Sorting & Reordering

// sort(callback?) → Sorts items (default = alphabetically).

// reverse() → Reverses order.


// 🔹 Joining & Splitting

// join(separator) → Converts array to string.

// toString() → Array → string (like join(',')).


// 🔹 Slicing & Copying

// slice(start, end) → Copy portion (non-destructive).

// concat(arr2, arr3, …) → Combines arrays.

// flat(depth) → Flattens nested arrays.

// flatMap(callback) → Map + flatten in one step.


// 🔹 Utility

// length → Number of items.

// fill(value, start?, end?) → Fills array with value.

// from(obj, mapFn?) → Converts iterable/string into array.

// isArray(obj) → Check if value is an array.

// of(...items) → Creates array from given values
