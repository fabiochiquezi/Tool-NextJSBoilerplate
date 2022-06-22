import { useComponents } from '../../../components/Context/config'
import { goOut } from '../../../firebase/auth/signOut'
import { useRouter } from 'next/router'
import React from 'react'

type props = {
    className?: string
}

const ButtonSignOut: React.FC<props> = ({ className = '' }) => {
    const router = useRouter()
    const { snackBar } = useComponents()

    async function signOut(e: any) {
        e.preventDefault()
        const { ok, message } = await goOut()

        if (ok) {
            snackBar.setSnackBar({
                open: true,
                message,
                severity: 'success'
            })
            router.push('/')
            return
        }

        snackBar.setSnackBar({
            open: true,
            message,
            severity: 'error'
        })
    }

    return (
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
            href=""
            onClick={e => signOut(e)}
        >
            Sign Out
        </a>
    )
}

export default ButtonSignOut
