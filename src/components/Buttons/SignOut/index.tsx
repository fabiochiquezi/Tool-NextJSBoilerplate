import Link from 'next/link'
import React from 'react'

type props = {
    className?: string
}

const ButtonSignOut: React.FC<props> = ({ className = '' }) => {
    return (
        <Link href="/">
            <a
                className={`
                    ${className}
                    border-b-2
                    border-gray-900
                    font-bold
                    hover:text-gray-300
                    hover:border-gray-300
                    transition duration-150 ease-out
                `}
            >
                Sign Out
            </a>
        </Link>
    )
}

export default ButtonSignOut
