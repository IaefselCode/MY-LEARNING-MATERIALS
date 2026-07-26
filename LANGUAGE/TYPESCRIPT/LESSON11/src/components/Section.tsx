import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({ children, title = "My Subheading" }: SectionProps) => {//We can also provide a default value for the Prop{title}
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

// NOTE
// As react keeps on being updated some of the things that were previously done with TS are no longer adviced
// Eg ONLDER WAY
// export const Section: React.FC<{title: string}> = ({children, title}) =>{
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     )
// }
// We could do this below React 18


// So we will not be using React.FC and if you notice in the children here there is the issue because i have no its type
// So lets fix this by using ReactNode
// So we must need an explicit definition of the of the type of children to be ReactNode

// Note
// Children Is different from the prop 
// Children is what we would pass in between the jsx element in the parent component
//ReactNode have alot of options because we are not sure what we should put as a children thats why Its the best option