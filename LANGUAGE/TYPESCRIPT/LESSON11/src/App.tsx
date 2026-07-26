import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello"} /> //here after importing the heading component note the title is required because there we were expecting a title which is passed as a prop so TS is helpful
      <Section title={"Different Title"}>This is my Section.</Section> //This is my Section is the Children
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>} />
    </>
  ) 
}

export default App
