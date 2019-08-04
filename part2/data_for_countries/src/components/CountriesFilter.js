import React from 'react'

const CountriesFilter = ({filterValue,handleFilterChange}) => {
    return(
        <>
        <span>find countries:</span>
        <input type="text" value={filterValue} onChange={handleFilterChange}></input>
        <br></br>
        </>
    );
}

export default CountriesFilter