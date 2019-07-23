import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('Martin Fowler')

  const addNewName = (event) => {
    event.preventDefault()

    if (newName === "") {
      alert(`you shouldn't add blank spaces`)
      return;
    }
    else if (isNewNameAdded({ newName })) {
      alert(`${newName} is already added to phoneBook`)
      return;
    }

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

  const isNewNameAdded = ({ newName }) => {
    return persons.filter(person => person.name === newName).length > 0
  }

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