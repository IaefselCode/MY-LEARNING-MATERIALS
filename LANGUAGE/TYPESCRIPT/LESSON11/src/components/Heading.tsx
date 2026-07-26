import { ReactElement } from "react"

type HeadingProps = { title: string }

const Heading = ({ title }: HeadingProps): ReactElement => {
    return <h1>{title}</h1>
}
export default Heading
// So here as you can see may be we receive a title as a prop and we want it to be a string 
// So we set its type of HeadingProps
// and we use it in the Heading but as we see the function only returns a JSX of title so we specify that the function returns ReactElement
