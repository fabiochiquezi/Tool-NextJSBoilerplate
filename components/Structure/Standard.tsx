import React from 'react'
import StandardTitle from '../Titles/Standard'
import StandardHeader from './Headers/Standard'
import StandardMenu from './Menus/Standard'

type props = { children: React.ReactNode}

const StandarStructure: React.FC<props> = ({ children }) => {
    return (
        <div className='mt-1'>
            <StandardHeader />
            <div className='container mx-auto px-4 mt-16'>
                <StandardTitle />
                <StandardMenu />
                {children}
            </div>
        </div>
    )
}

export default StandarStructure
