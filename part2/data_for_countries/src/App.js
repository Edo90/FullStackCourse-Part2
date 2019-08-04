import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CountriesFilter from './components/CountriesFilter'
import CountryDetail from './components/CountryDetail'

function App() {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const getListOfCountries = () => {

    if (countries.length > 0) {

      if (filterValue.length === 0) {
        return "To filter just write something down in the filter box"
      }

      const countriesFiltered = getCountriesFiltered()
      if (countriesFiltered.length > 10) {
        return "Too many matches, specify another filter"
      } else if (countriesFiltered.length === 1) {
        const firstElement = 0
        return <CountryDetail country={countriesFiltered[firstElement]}></CountryDetail>
      }
      else if (countriesFiltered.length === 0) {
        return "No matches found"
      } else {
        return countriesFiltered.map(country => <span key={country.name}>{country.name} <br></br></span>)
      }
    }
  }

  const getCountriesFiltered = () => {
    return countries.filter(country => country.name.toLowerCase().includes(filterValue.toLowerCase()))
  }


  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
  }

  return (
    <div>
      <CountriesFilter filterValue={filterValue} handleFilterChange={handleFilterChange}></CountriesFilter>
      {getListOfCountries()}
    </div>
  );

}

export default App;
