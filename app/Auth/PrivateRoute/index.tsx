import styled from 'styled-components'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import { getUser } from '../../../firebase/auth/authState'

const Div = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;

    .spin {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -20px;
        margin-top: -20px;
    }
`

type props = {
    children: ReactNode
}

const PrivateRoute: React.FC<props> = ({ children }) => {
    const router = useRouter()
    const [verifyState, setVerifyState] = useState(false)

    useEffect(() => {
        getUser()
            .then(data => setVerifyState(true))
            .catch(() => {
                router.push('/')
            })
    }, [])

    if (!verifyState) return <Div>Loading...</Div>
    return <div>{children}</div>
}

export default PrivateRoute
