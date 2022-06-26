import React from 'react'
import { simpleToDoDomainT } from '../types'

type Li = {
    className?: string
    id: string
    key: string
    children: React.ReactNode
}

export type SimpleTodoListT = {
    list: simpleToDoDomainT[]
    Li: React.FC<Li>
}
