import React from 'react'
import { BarContainer } from './Components/BarContainer'
import { FilterIcon } from './Components/FilterIcon'
import { FiltersButton } from './Components/FiltersButton'
import { FiltersContainer } from './Components/FiltersContainer'
import AccountFilterIcon from '../../Pictures/AccountFilterIcon.png'
import { SearchByName } from './Components/SearchByName'

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
        <SearchByName placeholder="Search By Name"/>
      </BarContainer>
    </>
  )
}

export default SearchBar