import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from 'react' 

interface User {
  id: number,
  username: string,
}

type fibFunc = (n: number) => number 

const fib: fibFunc = (n) => { //So this is example of reculsion where the function its calling itself but also its an expensive calculation So this is something we would useMemo on
  if (n < 2) return n 
  return fib(n - 1) + fib(n - 2) 
}

//So here am going to define a number that i will pass in
const myNum: number = 37 //It takes a little bit to calculate but if you go too high might get longer and browser might crush

function App() {
  //USESTATE
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)
  // const [users1, setUsers1] = useState<User>({} as User)//Some times you might see an Assertion which is not recommended because that object must be filled as quick as possible otherwise if its late you might get an error





  // USEREF
  const inputRef = useRef<HTMLInputElement>(null)//Here we have been very specific about what we are going to use these useRef On
// But when its null that could be a problem to TS but we could use a non-null assertion "!"
// Eg. const inputRef = useRef<HTMLInputElement>(null!)

//We could also use type guard
// Eg. if (!inputRef.current) {
  
// } 

//And also using Optional chaining
  console.log(inputRef?.current) 
  console.log(inputRef?.current?.value)






  // USEEFFECT
  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')//But Also use effect have a clean up function
    //And according to the react strictmode react renders twice but because of the clean up function you will see that once

  }, [users])
  //Now use effect is dealing with side effects so there is pretty much nothing to do with TS unless you want to return something
  //Its running when the component mount
  //This will first be executed when the page renders for the first time and then if the user state changes






  // USECALLBACK - Will memorize a function so its not always recreated (PERFORMANCE)
  const addTwo = useCallback(() => setCount(prev => prev + 2),[])
  //So here the setcount we could just use it in the onclick directly but the function will be recreated every single time 
  //Thats why we use useCallback to memorize it 
  //note useCallback also have a dependency array at the last like useEffect so anything that may be depended in the hook can be passed in

  // Now When it Comes to TYPESCRIPT
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void  => setCount(prev => prev + 2),[])
  // We can just make that the function returns a void because thats what TS Infers and also in the parameter we can keep e for and type any because thats what TS Infers but we can also be more specific
  






  // USEMEMO - Will memorize a value (PERFORMANCE)
  // And we would use that for an expencive calculation something that takes a while to calculate and might hold up everything in our component until it had that value
  //Example a fibinoch frequency function
  const result = useMemo<number>(() => fib(myNum),[myNum]) 
//So here we are calling the useMemo to our Fib function and wi pass in myNum which is gonna be memorized  
//and in the dependency array we gonna pass myNum because its gonna memorize nyNum until myNum changes then its gonna recalculate the function and memorize the other


  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
