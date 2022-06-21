import React from 'react'

type props = {
    children?: React.ReactNode
}

const StandardTitle: React.FC<props> = ({ children }) => {
  return <h1 className='text-center text-4xl font-bold w-100 mb-8'>{children ?? 'SimpleToDo'}</h1>
}

export default StandardTitle
