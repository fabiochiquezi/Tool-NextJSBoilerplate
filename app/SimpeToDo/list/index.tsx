import React from 'react'
import { domain } from '../types'

type props = {
    list: domain[]
}

const SimpleTodoList: React.FC<props> = ({ list }) => {
    const isEmpty = list.length === 0

    const Empty = () => (
        <p className="mt-16 text-center w-100 text-lg text-blue-400 font-bold">
            The list is empty
        </p>
    )

    const List = () => (
        <ul className="mt-24">
            {list.map(item => (
                <li
                    key={item._id}
                    id={item._id}
                    className="mt-8 text-center w-100"
                >
                    {item.content}
                </li>
            ))}
        </ul>
    )

    return isEmpty ? <Empty /> : <List />
}

export default SimpleTodoList
