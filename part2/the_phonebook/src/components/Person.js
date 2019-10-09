import React from 'react'


const Person = ({person, handlePersonDelete}) => {
    return(
        <div>
            <p><span>{person.name}</span> <span>{person.number}</span> <button onClick ={() => handlePersonDelete(person)}>delete person</button></p>
        </div>
    )
}

export default Person