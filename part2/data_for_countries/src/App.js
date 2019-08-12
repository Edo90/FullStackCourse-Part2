import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CountriesFilter from './components/CountriesFilter'
import CountryDetail from './components/CountryDetail'

function App() {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [countryDetail, setCountryDetail] = useState({})

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const getListOfCountries = () => {
    if (showDetail) {

      return showCountryDetail(countryDetail)
    } else {

      if (filterValue.length === 0) {
        return <div>To filter just write something down in the filter box</div>
      }

      const countriesFiltered = getCountriesFiltered()
      if (countriesFiltered.length > 10) {
        return <div>Too many matches, specify another filter</div>
      } else if (countriesFiltered.length === 1) {
        const firstElement = 0
        const country = countriesFiltered[firstElement]
        setCountryDetail(country)
        setShowDetail(true)
      }
      else if (countriesFiltered.length === 0) {
        return <div>Too many matches, specify another filter</div>
      } else {
        return countriesFiltered.map(function (country) {
          return <div key={country.name}>
            <span >{country.name}</span>
            <button onClick={() => handleClick(country)}>Show</button>
          </div>
        }

        )
      }

    }

  }

  const showCountryDetail = (country) => {
    debugger
    return <CountryDetail country={country}></CountryDetail>
  }

  const handleClick = (country) => {
    setShowDetail(true)
    setCountryDetail(country)
  }

  const getCountriesFiltered = () => {
    return countries.filter(country => country.name.toLowerCase().includes(filterValue.toLowerCase()))
  }

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
    setShowDetail(false)
  }

  return (
    <div>
      <CountriesFilter filterValue={filterValue} handleFilterChange={handleFilterChange}></CountriesFilter>
      {getListOfCountries()}
    </div>
  );
}

export default App;
