import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    ButtonSignOut: React.FC
    log: boolean
}

const StandardHeader: React.FC<props> = ({ ButtonSignOut, log = false }) => {
    return (
        <header className="mx-4">
            <div className="container flex justify-between items-center mx-auto">
                <Link href="/" className="logo">
                    <a>
                        <Image src="/logo.png" width={90} height={90} />
                    </a>
                </Link>
                <div>
                    {log ? (
                        <ButtonSignOut />
                    ) : (
                        <div>
                            <Link href="/auth/sign-up">
                                <a>
                                    <Button
                                        variant="contained"
                                        className="mr-4"
                                    >
                                        Sign Up
                                    </Button>
                                </a>
                            </Link>
                            <Link href="/auth/sign-in">
                                <a>
                                    <Button variant="contained">Sign In</Button>
                                </a>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default StandardHeader
