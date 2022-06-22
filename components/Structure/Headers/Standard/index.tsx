import ButtonSignOut from '../../../../app/Auth/SignOut'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StandardHeader: React.FC = () => {
    return (
        <header className="mx-4">
            <div className="container flex justify-between items-center mx-auto">
                <Link href="/" className="logo">
                    <a>
                        <Image src="/logo.png" width={90} height={90} />
                    </a>
                </Link>
                <ButtonSignOut className="mb-2" />
            </div>
        </header>
    )
}

export default StandardHeader
