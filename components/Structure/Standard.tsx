import React from 'react'
import { Header } from './Headers/Default'

type props = { children: React.ReactNode; ButtonSignOut: React.FC }

const Structure: React.FC<props> = ({ children, ButtonSignOut }) => (
    <div className="mt-1">
        <Header ButtonSignOut={ButtonSignOut} />
        <div className="container mx-auto px-4 mt-16">{children}</div>
    </div>
)

export { Structure }
