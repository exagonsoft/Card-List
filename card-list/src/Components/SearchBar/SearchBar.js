import React, { useState } from 'react'
import { BarContainer } from './Components/BarContainer'
import { FilterIcon } from './Components/FilterIcon'
import { FiltersButton } from './Components/FiltersButton'
import { FiltersContainer } from './Components/FiltersContainer'
import AccountFilterIcon from '../../Pictures/AccountFilterIcon.png'
import { SearchByName } from './Components/SearchByName'
import { FiltersContainerBorder } from './Components/FiltersContainerBorder'
import { FiltersContainerItemList } from './Components/FiltersContainerItemsList'
import { FiltersContainerTitle } from './Components/FiltersContainerTitle'
import { FiltersContainerSubTitle } from './Components/FiltersContainerSubTitle'
import { FiltersContainerCheckBox } from './Components/FilterContainerCheckBox'
import { FiltersContainerCheckBoxWrapper } from './Components/FiltersContainerCheckBoxWrapper'
import { FiltersContainerWrapper } from './Components/FiltersContainerWrapper'

const SearchBar = (props) => {
  return (
    <>
      <BarContainer >
        <FiltersContainerWrapper>
        <FiltersButton Showed={props.showFilters} onClick={() => {
          props.OnFiltersClick();
        }}>
          <FilterIcon src={AccountFilterIcon} />
          {props.showFilters ? ('Apply') : ('Filters')}
        </FiltersButton>
        <FiltersContainer Showed={props.showFilters}>
          <FiltersContainerBorder />
          <FiltersContainerItemList>
            <FiltersContainerTitle>FILTERS</FiltersContainerTitle>
            <FiltersContainerSubTitle>Card Type</FiltersContainerSubTitle>
            <FiltersContainerCheckBoxWrapper>
              <FiltersContainerCheckBox id="filterTypeHQ" onChange={(sender) => props.OnBoolFiltersChange(sender, "HQ")} type="checkbox"></FiltersContainerCheckBox>HQ
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterTypeCHR" onChange={(sender) => props.OnBoolFiltersChange(sender, "Character")} type="checkbox"></FiltersContainerCheckBox>Character
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterTypeTECH" onChange={(sender) => props.OnBoolFiltersChange(sender, "Technology")} type="checkbox"></FiltersContainerCheckBox>Technology
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerSubTitle>Factions</FiltersContainerSubTitle>
            <FiltersContainerCheckBoxWrapper>
              <FiltersContainerCheckBox id="filterFactionAwaken" onChange={(sender) => props.OnBoolFiltersChange(sender, "Awaken")} type="checkbox"></FiltersContainerCheckBox>Awaken
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterFactionEntropy" onChange={(sender) => props.OnBoolFiltersChange(sender, "Entropy")} type="checkbox"></FiltersContainerCheckBox>Entropy
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterFactionInhuman" onChange={(sender) => props.OnBoolFiltersChange(sender, "Inhuman")} type="checkbox"></FiltersContainerCheckBox>Inhuman
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterFactionOwner" onChange={(sender) => props.OnBoolFiltersChange(sender, "Owner")} type="checkbox"></FiltersContainerCheckBox>Owner
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterFactionUndeviant" onChange={(sender) => props.OnBoolFiltersChange(sender, "Undeviant")} type="checkbox"></FiltersContainerCheckBox>Undeviant
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerSubTitle>Rarity</FiltersContainerSubTitle>
            <FiltersContainerCheckBoxWrapper>
              <FiltersContainerCheckBox id="filterRarityLeg" onChange={(sender) => props.OnBoolFiltersChange(sender, "Legendary")} type="checkbox"></FiltersContainerCheckBox>Legendary
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterRarityRare" onChange={(sender) => props.OnBoolFiltersChange(sender, "Rare")} type="checkbox"></FiltersContainerCheckBox>Rare
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterRarityUnCom" onChange={(sender) => props.OnBoolFiltersChange(sender, "UnCommon")} type="checkbox"></FiltersContainerCheckBox>UnCommon
            </FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBoxWrapper>
            <FiltersContainerCheckBox id="filterRarityCommon" onChange={(sender) => props.OnBoolFiltersChange(sender, "Common")} type="checkbox"></FiltersContainerCheckBox>Common
            </FiltersContainerCheckBoxWrapper>
          </FiltersContainerItemList>
        </FiltersContainer>
        </FiltersContainerWrapper>
        <SearchByName placeholder="Search By Name" onChange={(sender) => {
          props.OnNameFilterChange(sender, "Name");
        }}/>
      </BarContainer>
    </>
  )
}

export default SearchBar