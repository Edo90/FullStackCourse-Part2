import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456' },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523' },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('Martin Fowler')

  const [newPhoneNumber, setNewPhoneNumber] = useState('123-123-1232')

  const [filterName, setFilterName] = useState('')

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
      name: newName,
      phoneNumber: newPhoneNumber
    }

    setPersons(persons.concat(person))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    setFilterName(event.target.value)

  }

  const getPeopleFiltered = () => {
    const peopleFiltered = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    return peopleFiltered.map(person => <p key={person.name}><span>{person.name}</span> <span>{person.phoneNumber}</span></p>)
  }

  const isNewNameAdded = ({ newName }) => {
    return persons.filter(person => person.name === newName).length > 0
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filterName} onChange={handleFiltering} />
      </div>
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
      <h2>Numbers</h2>
      {getPeopleFiltered()}
    </div>
  )
}

export default App