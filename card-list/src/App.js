import { useEffect, useState } from "react";
import "./App.css";
import List from "./Components/List/List";
import SearchBar from "./Components/SearchBar/SearchBar";
import SingleCard from "./Components/SingleCard/SingleCard";
import { JsonList } from "./Utils/MockData";

function App() {
  const initFilters = {
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
  const [filters, setFilters] = useState(initFilters);
  const [HQCardList, setHQCardList] = useState([]);
  const [CharCardList, setCharCardList] = useState([]);
  const [TechCardList, setTechCardList] = useState([]);
  const [ShowSingle, setShowSingle] = useState(false);

  const CardList = JsonList;

  function TogleSingleCard(card){

  }

  function OnFiltersClick() {
    setshowFilters(!showFilters);
  }
  function OnNameFilterChange(sender, field) {
    setFilters({
      ...filters,
      [field]: sender.target.value,
    });
    GetCardLists();
  }
  function OnBoolFiltersChange(sender, field) {
    let data = false;
    if (sender.target.checked) {
      data = true;
    } else {
      data = false;
    }
    let tempData = filters;
    tempData[field] = data;
    setFilters(tempData);
    GetCardLists();
  }

  const GetCardLists = () => {
    let HQList = [];
    let CharList = [];
    let TechList = [];
    CardList.forEach((element) => {
      if (
        filters["Name"] === "" &&
        !filters["HQ"] &&
        !filters["Character"] &&
        !filters["Technology"] &&
        !filters["Awaken"] &&
        !filters["Entropy"] &&
        !filters["Inhuman"] &&
        !filters["Owner"] &&
        !filters["Undeviant"] &&
        !filters["Legendary"] &&
        !filters["Rare"] &&
        !filters["UnCommon"] &&
        !filters["Common"]
      ) {
        switch (element["CardType"]) {
          case "HQ":
            HQList.push(element);
            break;
          case "Character":
            CharList.push(element);
            break;
          case "Technology":
            TechList.push(element);
            break;
          default:
            break;
        }
      } else {
        switch (element["CardType"]) {
          case "HQ":
            if (
              filters["Name"] === element["Name"] ||
              filters["HQ"] ||
              (filters["Awaken"] && element["Faction"] === "Awaken") ||
              (filters["Entropy"] && element["Faction"] === "Entropy") ||
              (filters["Inhuman"] && element["Faction"] === "Inhuman") ||
              (filters["Owner"] && element["Faction"] === "Owner") ||
              (filters["Undeviant"] && element["Faction"] === "Undeviant") ||
              (filters["Legendary"] && element["Rarity"] === "Legendary") ||
              (filters["Rare"] && element["Rarity"] === "Rare") ||
              (filters["UnCommon"] && element["Rarity"] === "Uncommon") ||
              (filters["Common"] && element["Rarity"] === "Common")
            ) {
              HQList.push(element);
            }
            break;
          case "Character":
            if (
              filters["Name"] === element["Name"] ||
              filters["Character"] ||
              (filters["Awaken"] && element["Faction"] === "Awaken") ||
              (filters["Entropy"] && element["Faction"] === "Entropy") ||
              (filters["Inhuman"] && element["Faction"] === "Inhuman") ||
              (filters["Owner"] && element["Faction"] === "Owner") ||
              (filters["Undeviant"] && element["Faction"] === "Undeviant") ||
              (filters["Legendary"] && element["Rarity"] === "Legendary") ||
              (filters["Rare"] && element["Rarity"] === "Rare") ||
              (filters["UnCommon"] && element["Rarity"] === "Uncommon") ||
              (filters["Common"] && element["Rarity"] === "Common")
            ) {
              CharList.push(element);
            }
            break;
          case "Technology":
            if (
              filters["Name"] === element["Name"] ||
              filters["Technology"] ||
              (filters["Awaken"] && element["Faction"] === "Awaken") ||
              (filters["Entropy"] && element["Faction"] === "Entropy") ||
              (filters["Inhuman"] && element["Faction"] === "Inhuman") ||
              (filters["Owner"] && element["Faction"] === "Owner") ||
              (filters["Undeviant"] && element["Faction"] === "Undeviant") ||
              (filters["Legendary"] && element["Rarity"] === "Legendary") ||
              (filters["Rare"] && element["Rarity"] === "Rare") ||
              (filters["UnCommon"] && element["Rarity"] === "Uncommon") ||
              (filters["Common"] && element["Rarity"] === "Common")
            ) {
              TechList.push(element);
            }
            break;
          default:
            break;
        }
      }
    });

    setHQCardList(HQList);
    setCharCardList(CharList);
    setTechCardList(TechList);
  };

  useEffect(() => {
    GetCardLists();
  }, []);

  return (
    <>
      <SearchBar
        showFilters={showFilters}
        OnBoolFiltersChange={OnBoolFiltersChange}
        OnNameFilterChange={OnNameFilterChange}
        OnFiltersClick={OnFiltersClick}
      />
      <List
        HQCardList={HQCardList}
        CharCardList={CharCardList}
        TechCardList={TechCardList}
        TogleSingleCard={TogleSingleCard}
      />
      <SingleCard />
    </>
  );
}

export default App;
