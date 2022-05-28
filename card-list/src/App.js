import { useState } from 'react';
import './App.css';
import List from './Components/List/List';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const Filters = {
    HQ: false,
    Character: false,
    Technology: false,
    Awaken: false,
    Entropy: false,
    Inhuman: false,
    Owner: false,
    Undeviant: false,
    Legendary: false,
    Rare: false,
    UnCommon: false,
    Common: false,
  };
  const [showFilters, setshowFilters] = useState(false);
  const [filters, setFilters] = useState(Filters);

  function OnFiltersClick(filtersData){
    setshowFilters(!showFilters);
    setFilters(filtersData);
    console.log(filtersData);
  }
  function OnFilterSelected(){

  }
  return (
    <>
      <SearchBar showFilters={showFilters} OnFiltersClick={OnFiltersClick} />
      <List Filters={filters}/>
    </>
  );
}

export default App;
