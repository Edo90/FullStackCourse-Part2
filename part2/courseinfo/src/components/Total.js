import React from 'react'

const Total = ({ parts }) => {

    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <>
            <h4><span>Total of {total} exercises</span></h4>
        </>
    )
}
export default Total