import { ReactNode } from 'react'

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}
export default List
//Most of the time TS doesent recognise geneerics so you can make it recognise it by putting a comma in the first generic
// <T,> 

// GENERIC