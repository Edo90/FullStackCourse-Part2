import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {

    const partRow = () => parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}></Part>)

    return (
        <>
            {partRow()}
        </>
    )
}

export default Content