import React from 'react'

const PersonForm = ({addNewName,newName,handleNameChange,newPhoneNumber,handleNumberChange}) => {

    return(
        <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhoneNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm