import ButtonSignOut from '../../../Buttons/SignOut'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StandardHeader: React.FC = () => {
    return (
        <header className="mx-4 flex justify-between items-center">
            <Link href="/" className="logo">
                <a>
                    <Image src="/logo.png" width={90} height={90} />
                </a>
            </Link>
            <ButtonSignOut className="mb-2" />
        </header>
    )
}

export default StandardHeader
