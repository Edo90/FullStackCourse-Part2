import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('Martin Fowler')

  const addNewName = (event) => {
    event.preventDefault()

    if (newName === "") return;

    const person = {
      name: newName
    }

    setPersons(persons.concat(person))
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const getPeople = persons.map(person => <p key={person.name}>{person.name}</p>)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {getPeople}
    </div>
  )
}

export default App