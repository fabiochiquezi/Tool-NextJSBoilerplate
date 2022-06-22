import React from 'react'
import StandardHeader from './Headers/Standard'

type props = { children: React.ReactNode; ButtonSignOut: React.FC }

const StandarStructure: React.FC<props> = ({ children, ButtonSignOut }) => (
    <div className="mt-1">
        <StandardHeader ButtonSignOut={ButtonSignOut} />
        <div className="container mx-auto px-4 mt-16">{children}</div>
    </div>
)

export default StandarStructure
