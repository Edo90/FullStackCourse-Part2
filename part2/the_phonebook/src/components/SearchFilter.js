import React from 'react'

const SearchFilter = ({filterValue,handleFilter}) => {
    
    return(
        <div>
            filter shown with: <input value={filterValue} onChange={handleFilter} />
          </div>
    )
}

export default SearchFilter