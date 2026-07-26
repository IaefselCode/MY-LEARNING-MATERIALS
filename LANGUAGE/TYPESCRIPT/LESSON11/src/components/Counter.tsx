import { ReactNode } from 'react'

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}

const Counter = ({ setCount, children }: CounterProps) => {

    return (
        <>
            <h1>{children}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    )
}
export default Counter
//This shows just how setCount have been pass down but also we can just use
// const [count, setCount] = useState<number>(1)
// And Proceed