import React from 'react'
import { domain } from '../types'

type Li = {
    className?: string
    id: string
    key: string
    children: React.ReactNode
}

export type props = {
    list: domain[]
    Li: React.FC<Li>
}
