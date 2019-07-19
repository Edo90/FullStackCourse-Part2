import React from 'react'

const Total = (props) => {

    const total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises

    return (
        <>
            <h4><span>Total of {total} exercises</span></h4>
        </>
    )
}

export default Total