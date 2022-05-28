import React from 'react'
import { BarContainer } from './Components/BarContainer'
import { FilterIcon } from './Components/FilterIcon'
import { FiltersButton } from './Components/FiltersButton'
import { FiltersContainer } from './Components/FiltersContainer'
import AccountFilterIcon from '../../Pictures/AccountFilterIcon.png'

const SearchBar = () => {
  return (
    <>
      <BarContainer >
        <FiltersButton>
          <FilterIcon src={AccountFilterIcon} />
          Apply Filters
        </FiltersButton>
        <FiltersContainer>
          
        </FiltersContainer>
      </BarContainer>
    </>
  )
}

export default SearchBar