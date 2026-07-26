// UTILITY TYPES
// Now TypeScript offers many utility types that are helpful for common type transformation And we are going to cover alot of those today
//Now with that lets create an updateAssignment function
const updateAssignment = (assign, propsToUpdate) => {
    // After that other parameter say propsToUpdate and we specified this as a 'Partial' so we dont want all the props just the ones we are going to update and its gonna also be the Assignment type and after then the function returns Assignment type
    //So it means we are not going to require all of the props just the ones that we pass in (So it makes them optional)
    return { ...assign, ...propsToUpdate }; //So what the function will do is just we spread in the assign that we passed in and then we will just override any of those props that we want to update
    //  So this allows us to not pass in all of the props but declare that their props of assignment
};
//Now lets look at how this works
//So here we have got an object called assign1 with type Assignment and inside have the studentId,title and grade
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
// Then we lo to the updateAssignment and we pass in assign1 and then am overriding the grade property to 95 so that is propToUpdate
// So Again its a partial of assignment
console.log(updateAssignment(assign1, { grade: 95 }));
// And then notice am creating an assingGraded which is an assignment and am calling the updateAssignment and am passing in the assign1 and overriding grade property to 95
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
//Partial utility type allows us to pass in an object that just has one property
// 2 - Required and Readonly *******
// REQUIRED
// Here require is we are going to require all of the properties even the verified which is optional
const recordAssignment = (assign) => {
    // send to database, etc. 
    return assign;
};
// recordAssignment(assignGraded) // Here if you keep assignGraded it self it wont work because verified was not in and the record assignment requires all properties
recordAssignment({ ...assignGraded, verified: true }); //So here we putted it in an object and spread it in and add verified true and it works
// READONLY
const assignVerified = { ...assignGraded, verified: true };
// assignVerified.grade = 88 //Cannot work because it a read only property
// 3 - Record *******
// One of the most popular utility type 
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
//And them we can use them in here for the finalGrades using Record
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
//And here we have used the students and the Grades
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
//Then we use them here
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
const createNewAssign = (title, points) => {
    return { title, points };
}; //So here its done but the problem is if we change these function then we also need to change the type
// But what if we do not have our return newAssign and its type yet WE JUST CREATE THE FUNCTION
const createNewAssign2 = (title, points) => {
    return { title, points };
};
// So now even if we change the function we wouldn't need to change the return type
// This is very usefull especially if you are working with the function that you didn't create
// Eg Bringing something from the library and then you update the library and it changes the function and then the return is different 
// Well the return type will be automatically updated too
// NOW QUICK USE OF THESE FUNCTION
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign2(...assignArgs);
console.log(tsAssign2);
//NOTE - We havent worked on promises yet 
const fetchUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then(users => console.log(users)); //So finnaly here we call the FetchUsers and then Log the users 
export {};
//We can accurately get the users because if Awatied
