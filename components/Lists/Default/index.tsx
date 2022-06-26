import React, { FC } from 'react'
import { LiT } from './types'

const Li: FC<LiT> = ({ className, id, key, children = '' }) => (
    <li
        className={`mt-8 text-center w-80 bg-gray-300 h-10 text-xl flex items-center justify-center mx-auto ${className}`}
        id={id}
        key={key}
    >
        {children}
    </li>
)

export { Li }
