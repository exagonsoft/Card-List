import { useState } from 'react';
import './App.css';
import List from './Components/List/List';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const Filters = {
    Name: "",
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
    console.log(filters);
  }
  function OnNameFilterChange(sender, field){
    setFilters({
      ...filters,
      [field]: sender.target.value,
    });
    console.log(filters);
  }
  return (
    <>
      <SearchBar showFilters={showFilters} OnNameFilterChange={OnNameFilterChange} OnFiltersClick={OnFiltersClick} />
      <List Filters={filters}/>
    </>
  );
}

export default App;
