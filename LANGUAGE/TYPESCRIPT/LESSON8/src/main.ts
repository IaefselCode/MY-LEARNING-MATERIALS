//GENERICS
// The Idea of TS is to define strict Types for Type safety developer experience and to do that we are usually as detailed as possible
// How ever TS does Allow for Generics because sometimes we simply dont know what types will be passed in to a function,interface,typeAeliase,class and a the
// And Generics Allows us to Provide a Placeholder
const stringEcho = (arg: string): string => arg; //Now this function its fine except notice its dedicated to a string type only
// But what if we want to write a more generic  we could abstract the type out so this would work with any function
// Using what we call a typeParameter <T> But you can also use any letter you want
const echo = <T>(arg: T): T => arg; //Here now this also works except it works with any type that we would pass in to these function
// So we are providing what ever that typed variable is and then we are using it in the parameter and then we are also using it in the return type
// Now it doesent need to be in the return type it can be any were we need it to be

// This could be useful in Utility functions where we arent sure what type we are going to pass in may be we are going to check if it is a certain type
//////////////////////////////////

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

///////////////////////////////////
// Note: One good sign that you need a generic is when a function has todo some logic some thinking about what it needs to return
// Example
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

////////////////////////////////////
// You might think that in our return value to our function isTrue we could have defined it earier with an interface
//So lets Redo the function with an enterface
interface BoolCheck<T> {
  //we start with the interface and then these interface can also have a typed variable for our generic
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  //Now here to the return we just returned our Boolcheck<T>
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};
//And we also gonna change every place with arg we gonna add value: arg
//////////////////////////////////////

// Now lets look at another example where we can use the interface\
interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  //Here we use the extends keyword so not only we will have our Typed variable here for our generic
  // But we will also say extends HasID what we are doing here is narrowing that generic type so now the type will have to have an ID property that will be required
  // process the user with logic here
  return user;
};
//But you can see now if we were to co process user its going to use these hasID interface
// its going to extend that to the type so we have narrowed the type
//so now what we pass in as user has to have an ID property

// EXAMPLE
console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: 'Dave'}))

///////////////////////////////////////

// OKAY A MORE COMPLEX EXAMPLE NOW WITH EXTENDS ONCE AGAIN

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K,
): T[K][] => {
  // Here we use more than one typed variable and they both extends, And we are building K as a key the first type that we passed in that is T
  return users.map((user) => user[key]); // This is going to identify the values for that user
};
//Lets break this down in a little simpler terms
//So imagine T as an object that has an ID and this is the user object and then K is the keys of T of that user object
//So here we are going to have an array of user objects and we have identified the key as K so to get those values  we have to get the key to identify which value from the user
// And thats the type of array we are returning here because T is the user object K is the key and then an array full of those values identified

//So here are a couple larger objects for users and put then in an array called userArray (Their from JSON Placeholder)
const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

//So letsgo ahead and call our function inside of console log
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
//So if you can look back in our function we passed in an array of users in users:T[] and our araay have two users
//And then we looked up those keys in key:K and we were able to map through those keys and through our users essentially without using an assertion because we used the 'K extends keyof T' right up there as we passed in our typed variable
//So a very cool use of generics here
///////////////////////////////////////

// Okay that example was complex so lets Look at one more example before we are finished
//USING A GENERIC IN A CLASS
class StateObject<T> {
  //It has a generic here
  private data: T; //The type of the data would be that same generic type we specified

  constructor(value: T) {
    //Then the constructor
    this.data = value;
  }

  //Now lets put a getter and a setter for our state
  get state(): T {
    return this.data;
  }

  set state(value: T) {
    //A setter doesnot return anything
    this.data = value;
  }
}

//So we have got a very simple state object here using a getter and a setter
// Lets Instantiate
const store = new StateObject('John')
console.log(store.state);//and its should instantly use our getter and if we look in the console there is dave 

store.state = 'Dave' //here we also tried to add another one and there is no problem
console.log(store.state);

//But when we try to add a number we get a problem
// store.state = 12
// That is because at first when we assigned John which is a string TS infered that is the type of our state so we cannot add a number because at first TS infered string
//So we could set it like 
// const store = new StateObject<string>('John')

// So now lets set which accepts a string or number or boolean as long as its in an array
const myState = new StateObject<(string|number|boolean)[]>([15])
myState.state = (['Dave',42,true])
console.log(myState.state)
//So here TS will be happy






















