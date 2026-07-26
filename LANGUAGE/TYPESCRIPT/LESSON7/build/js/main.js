// Index Signatures & Keyof Assertions
// Indes Signature are useful when you are creating an object but you don't know the exact names of the object keys but you do know the shape of the object and you can declare the type of the keys and the type of the values
// But there is another reason that they are also useful because TS requires an index signature if you attempt to access an object property dynamically(And this second reason is how most begginers describe the use of it)
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 98,
};
// Now here we have provided all the required properties that we have inside of the interface 
// But there could come a time that we wouldn't know what these names would be when we are going to create an interface in advance
// And thats where an index signature can come in handy but can also be when we try to access any of those properties dynamically
// Eg. Dynamically
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
// Now example of dynamically accessing. this happens more often when we create a loop
//But lets first do it without a loop
let prop = 'Pizza';
console.log(todaysTransactions[prop]); // Error when we try to dynamically access this value
// With Loop
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; //In TS we get that same error that we were getting above without loop
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(`Test = ${student.test}`) 
// Lets write some more code that will iterate through our student that does not have index signature here in a loop
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // Here helps to create a key with union type of all the properties
}
Object.keys(student).map(key => {
    console.log(student[key]); //Here we also added typeof
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
//So this allows us to use the string literals up there as the different types that are expected
//the downside is that the string literals which are used as a key they all have the same type here which is number unlike in interface you can specify each key with its type
//Now here is the object based on our income
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
//What if we want to loop through these
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]); //Here we must use assertion
}
export {};
