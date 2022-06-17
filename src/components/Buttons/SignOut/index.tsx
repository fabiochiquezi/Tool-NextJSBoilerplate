import Link from 'next/link'
import React from 'react'

const ButtonSignOut: React.FC = () => {
    return (
        <Link href="/">
            <a
                className="
                    border-b-2
                    border-gray-900
                    font-bold
                    hover:text-gray-300
                    hover:border-gray-300
                    transition duration-150 ease-out
                "
            >
                Sign Out
            </a>
        </Link>
    )
}

export default ButtonSignOut
