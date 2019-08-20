import React from 'react'

const getCountryLanguages = ({ languages }) => {
    return languages.map(language => <li key={language.name}>{language.name}</li>)
}

const CountryDetail = ({ country,weather }) => {
    const languages = country.languages
    
    return (
        <>
            <h1>{country.name}</h1>
            <span>Capital {country.capital}</span>  <br></br>
            <span>Population {country.population}</span> <br></br>

            <br></br>
            <h2>Languages</h2>
            <ul>{getCountryLanguages({ languages })}</ul>
            <img src={country.flag} alt="flag_image" height="100px" width="200px"></img>
            <h2>Weather in {country.name}</h2>
            <img src={weather.current.condition.icon} alt="weather_icon"></img> <br></br>
            <b>temperature: </b> <span>{weather.current.temp_c} Celsius</span> <br></br>
            <b>wind: </b><span>{weather.current.wind_kph} kph direcction {weather.current.wind_dir}</span>
        </>
    )
}

export default CountryDetail