import React from 'react'

export type props = {
    className?: string
    id: string
    key: string
    children: React.ReactNode
}

const SimpleTodoLi: React.FC<props> = ({
    className,
    id,
    key,
    children = ''
}) => {
    return (
        <li
            className={`mt-8 text-center w-80 bg-gray-300 h-10 text-xl flex items-center justify-center mx-auto ${className}`}
            id={id}
            key={key}
        >
            {children}
        </li>
    )
}

export { SimpleTodoLi }
