import ButtonSignOut from '../../../Buttons/SignOut'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StandardHeader: React.FC = () => {
    return (
        <header className='mx-4 flex justify-between items-center'>
            <Link href="/" className='logo'>
                <a>
                    <Image src="/logo.png" width={58} height={58} />
                </a>
            </Link>
            <ButtonSignOut />
        </header>
    )
}

export default StandardHeader
