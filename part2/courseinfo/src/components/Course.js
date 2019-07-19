import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const course = ({course}) =>{
    const parts = course.parts
    return(
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total parts={parts} />
        </div>
    )
}

export default course