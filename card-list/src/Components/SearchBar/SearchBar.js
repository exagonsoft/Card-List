import React from 'react'
import { BarContainer } from './Components/BarContainer'
import { FiltersButton } from './Components/FiltersButton'
import { FiltersContainer } from './Components/FiltersContainer'

const SearchBar = () => {
  return (
    <>
      <BarContainer >
        <FiltersButton />
        <FiltersContainer>
          
        </FiltersContainer>
      </BarContainer>
    </>
  )
}

export default SearchBar