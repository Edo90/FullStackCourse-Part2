import React, { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Title from './components/Title'
import PersonForm from './components/PersonForm'
import People from './components/People'
import phonebooks from './services/phonebooks'

const App = () => {

  useEffect(() => {
    phonebooks
    .getAll()
    .then(persons => {
      setPersons(persons)
    })
  }, [])

  const [persons, setPersons] = useState([])
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
      number: newPhoneNumber
    }

    phonebooks.create(person).then(
      reponse => {
        setPersons(persons.concat(person))
        clearFields()
      }
    )
    
  }

  const clearFields = () =>{
    setNewName('')
    setNewPhoneNumber('')    
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
    return peopleFiltered.map(person => <p key={person.name}><span>{person.name}</span> <span>{person.number}</span></p>)
  }

  const isNewNameAdded = ({ newName }) => {
    return persons.filter(person => person.name === newName).length > 0
  }

  return (
    <div>
      <Title title="PhoneBook"></Title>
      <SearchFilter filterValue={filterName} handleFilter={handleFiltering}></SearchFilter>
      <PersonForm addNewName={addNewName} 
                  handleNameChange={handleNameChange}
                  newName={newName} 
                  handleNumberChange={handleNumberChange} 
                  newPhoneNumber={newPhoneNumber}></PersonForm>
      <Title title="Numbers"></Title>
      <People getPeopleFiltered={getPeopleFiltered()}></People>
    </div>
  )
}

export default App