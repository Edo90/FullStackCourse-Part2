import React, { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Title from './components/Title'
import PersonForm from './components/PersonForm'
import People from './components/People'
import phonebookService from './services/phonebooks'
import Person from './components/Person'

const App = () => {

  useEffect(() => {
    phonebookService
    .getAll()
    .then(persons => {
      setPersons(persons)
    })
    .catch(error => {
      alert(`Unable to get all People from phonebook`)
    })
  }, [])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Martin Fowler')
  const [newPhoneNumber, setNewPhoneNumber] = useState('123-123-1232')
  const [filterName, setFilterName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()

    if (newName === "" && newPhoneNumber === "") {
      alert(`you shouldn't add blank spaces`)
      return;
    }

    const existingPerson = persons.find(p => p.name === newName)
    if(existingPerson !== undefined && window.confirm(`${newName} is already added to phonebook, do you want to replace old number with the new one?`))
    {
      const updatedPerson = {...existingPerson,number: newPhoneNumber}
      phonebookService.updatePerson(updatedPerson)
        .then(response => {
         setPersons(persons.map(person => person.id !== existingPerson.id ? person : response))
         clearFields()        
        })
        .catch(error => {
          alert(`${newName} couldn't be updated`)
        })
        return;
    }

    const person = {
      name: newName,
      number: newPhoneNumber
    }

    phonebookService.create(person).then(
      personResult => {
        setPersons(persons.concat(personResult))
        clearFields()
      }
    ).catch(error => {
      alert(`Unable to create ${person.name}`)
    })
    
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

  const deletePersonById = (person) => {
    if(window.confirm(`Are you sure you want to delete ${person.name}?`)){
        phonebookService.deletePerson(person.id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
        .catch(error => {
          alert(`Unable to delete '${person.name}'`)
        })
    }

    
  }

  const getPeopleFiltered = () => {
    const peopleFiltered = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
    
    return peopleFiltered.map(person => <Person key={person.id} person={person} handlePersonDelete={deletePersonById}></Person>)
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