// UTILITY TYPES
// Now TypeScript offers many utility types that are helpful for common type transformation And we are going to cover alot of those today


// 1 - Partial *******

interface Assignment { // So here we have an assignment interface with studentId,title,grade and verified which is optional
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

//Now with that lets create an updateAssignment function
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => { //So here a function accept a parameter called assign which its types are Assignment
// After that other parameter say propsToUpdate and we specified this as a 'Partial' so we dont want all the props just the ones we are going to update and its gonna also be the Assignment type and after then the function returns Assignment type
//So it means we are not going to require all of the props just the ones that we pass in (So it makes them optional)
  return { ...assign, ...propsToUpdate } //So what the function will do is just we spread in the assign that we passed in and then we will just override any of those props that we want to update
  //  So this allows us to not pass in all of the props but declare that their props of assignment
}


//Now lets look at how this works
//So here we have got an object called assign1 with type Assignment and inside have the studentId,title and grade
const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
}

// Then we lo to the updateAssignment and we pass in assign1 and then am overriding the grade property to 95 so that is propToUpdate
// So Again its a partial of assignment
console.log(updateAssignment(assign1, { grade: 95 }))

// And then notice am creating an assingGraded which is an assignment and am calling the updateAssignment and am passing in the assign1 and overriding grade property to 95
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })
 console.log(assignGraded)
//Partial utility type allows us to pass in an object that just has one property



// 2 - Required and Readonly *******
// REQUIRED
// Here require is we are going to require all of the properties even the verified which is optional
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc. 
  return assign
}

// recordAssignment(assignGraded) // Here if you keep assignGraded it self it wont work because verified was not in and the record assignment requires all properties
recordAssignment({ ...assignGraded, verified: true }) //So here we putted it in an object and spread it in and add verified true and it works

// READONLY
const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

// assignVerified.grade = 88 //Cannot work because it a read only property





// 3 - Record *******
// One of the most popular utility type 
const hexColorMap: Record<string, string> = { //Here i just declared hexColor and use record to set that the keys and the values will be string in my object of colors
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
}

//You can also create string literal types 
type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

//And them we can use them in here for the finalGrades using Record
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U"
}


//We can also Do thi with an interface
interface Grades {
  assign1: number,
  assign2: number,
}

//And here we have used the students and the Grades
const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
}
//So there is much more it depends on how you are using the Record




// 4 - Pick and Omit *******
// It Goes Hand in Hand

type AssignResult = Pick<Assignment, "studentId" | "grade"> // So what we have done here is to pick what we need to use from the assignment thats studentId and grade It required both props that we Pick

//Then we use them here
const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}


type AssignPreview = Omit<Assignment, "grade" | "verified"> // This does the opposite it it omits them and the rest we will use and it requires both of the properties that were not ommited

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project",
}




// 5 - Exclude and Extract *******
type adjustedGrade = Exclude<LetterGrades, "U"> //Here we used Leter Grades

type highGrades = Extract<LetterGrades, "A" | "B">

// DIFFERENCE BETWEEN Pick&Omit AND Exclude&Extract
// Pick&Omit - Deals with Interface
// Exclude&Extract  -  Deals with String Literal Union types




// 6 - Nonnullable *******
type AllPossibleGrades = 'Dave' | 'John' | null | undefined //Here in our String Literal Union Type there is a Possibility of null and Undefined
type NamesOnly = NonNullable<AllPossibleGrades>//So these one excluded null and undefined So we will get only names



// 7 - ReturnType *******
// What we formally do in the functions 
//We usually do
type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number):newAssign => {
  return { title, points }
} //So here its done but the problem is if we change these function then we also need to change the type


// But what if we do not have our return newAssign and its type yet WE JUST CREATE THE FUNCTION
const createNewAssign2 = (title: string, points: number) => {
  return { title, points }
}

//Then after we create the function we could say
type NewAssign = ReturnType<typeof createNewAssign2> //So it could create the type according to the function
// So now even if we change the function we wouldn't need to change the return type
// This is very usefull especially if you are working with the function that you didn't create
// Eg Bringing something from the library and then you update the library and it changes the function and then the return is different 
// Well the return type will be automatically updated too

// NOW QUICK USE OF THESE FUNCTION
const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)






// 7 - Parameters ******* //Derive a type from the parameters of the function

type AssignParams = Parameters<typeof createNewAssign2>//Here it automatically create a tuple according to the typeof parameters of the createNewAssign2

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign2(...assignArgs)
console.log(tsAssign2)



// Awaited - helps us with the ReturnType of a Promise  (NEWEST HERE)
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

//NOTE - We havent worked on promises yet 
const fetchUsers = async (): Promise<User[]> => { //The async function returns Promise of User with type from interface and its an array

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}
// Now these is returning a promise that has user array

// Now to get these returnType if we were to use awaited
// first when we dont use awaited
type FetchUsersReturnType1 = ReturnType<typeof fetchUsers> //Here there is no problem but when you hover it you will see it returns a Promise<User[]> - Just a promise with user array inside

// But when we use awaited
type FetchUsersReturnType2 = Awaited<ReturnType<typeof fetchUsers>> //Her when we hover it returns array of users which is what we wanted so PROMISE is REMOVED 

fetchUsers().then(users => console.log(users)) //So finnaly here we call the FetchUsers and then Log the users 
//We can accurately get the users because if Awatied

