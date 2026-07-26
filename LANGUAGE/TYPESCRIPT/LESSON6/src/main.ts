class Coder1 {
  name: string; // You just cant use members(properties and methods) without a constructor
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  //This brings some kind of redundancy but we will fix it later
}

//We can solve it by adding (visibility / Data) Modifiers or members
//Like public and readonly they can be used together or not

class Coder2 {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number, //It can only be accessed inside of the class
    protected lang: string = "Typescript", //It can only be accessed in the class and subclass also its optional with default value of Typescript
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hellow, I'm ${this.age}`;
  }
} // This helps to make our code a little less r epeatitive

//   How to add a property without an error
// You can use an assertion Eg
class Coder3 {
  secondLang!: string;
}

// So Now Lets Instantiate the Coder2
const Dave = new Coder2("Dave", "Rock", 42, "Typescript");

console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)

//After that lets go ahead and Extend a Class
class WebDev extends Coder2 {
  constructor(
    //Here we need to pass severel things into the constructor but am going to also add some new properties
    public computer: string,
    name: string,
    music: string,
    age: number,
  ) {
    //Here before asigning anything we need ti first call super and it needs to receive everything we are receiving from the parent class
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I Write ${this.lang}`;
  }
}

// now lets instantiate it
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
//  console.log(Sara.age) //Its Still Private It Can only be accessed int the class
// console.log(Sara.lang) //Only in class and Subclass
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// How To Apply INTERFACE in a class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    ((this.name = name), (this.instrument = instrument));
  }

  play(action: string) {
    return `${this.name} ${action} ${this.instrument}`;
  }
}
//Its makes sure all of the members of the interface are present in the class with their types

//Instantiate
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Peeps {
  //Here am gonna create a static member and method
  static count: number = 0;

  static getCount(): number {
    return Peeps.count; //Notice am not using this operator because I refer to the class itself
    //So what the static keyword does it means that count doesmot applay to any instantiation of the class it applies to the class directly
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; //Meaning it will start counting first so our first id is 1 not 0
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// At Last Lets Take A look At GETTERS AND SETTERS Because you might see them in REACT when you are using useSate Hook for Example
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    //This is readOnly because get is a special keyword that Helps to get data from our dataState
    return this.dataState;
  } 

  public set data(value: string[]){ // set is another special keyword that we are going to use to set to our dataState
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Params is not an array of strings");
  }
}

// So Lest Instantiate
const MyBands = new Bands()
MyBands.data = ['David Modestus','Luis Richard']
console.log(MyBands.data)
MyBands.data = [...MyBands.data,"Myzer Might"]
console.log(MyBands.data)

// MyBands.data = 'Van Halen'
// MyBands.data = ['Van Halen',5150]
// MyBands.data = ['Van Halen']
// console.log(MyBands.data)







