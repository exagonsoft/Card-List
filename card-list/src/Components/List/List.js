import React, { useEffect, useState } from "react";
import { CardsCharContainer } from "./Components/CardsCharContainer";
import { CardsContainer } from "./Components/CardsContainer";
import { CardsContainersTitle } from "./Components/CardsContainersTitle";
import { CardsHQContainer } from "./Components/CardsHQContainer";
import { CardsItemsContainer } from "./Components/CardsItemContainer";
import { CardsTechContainer } from "./Components/CardsTechContainer";
import { CharCard } from "./Components/CharCard";
import { HQCard } from "./Components/HQCard";
import { TechCard } from "./Components/TechCard";

const List = (props) => {
  const url = "https://pastebin.com/raw/Yt8YLDV1";

  return (
    <>
      <CardsContainer>
        <CardsHQContainer>
          <CardsContainersTitle>Head Quartes</CardsContainersTitle>
          <CardsItemsContainer>
            {props.HQCardList.map((hqCard, index) => (
              <HQCard
                id={index++}
                key={index++}
                src={
                  "https://deviants-factions.mo.cloudinary.net/" +
                  hqCard["id"] +
                  ".png?tx=h_600,q_80,f_auto"
                }
                onClick={() => {
                  props.TogleSingleCard(hqCard);
                }}
              />
            ))}
          </CardsItemsContainer>
        </CardsHQContainer>
        <CardsCharContainer>
          <CardsContainersTitle>Characters</CardsContainersTitle>
          <CardsItemsContainer>
            {props.CharCardList.map((chCard, index) =>
              chCard["CardType"] === "Common" ? (
                <CharCard
                  id={index++}
                  key={index++}
                  src={
                    "https://deviants-factions.mo.cloudinary.net/" +
                    chCard["id"] +
                    ".png?tx=h_600,q_80,f_auto"
                  }
                  onClick={() => {
                    props.TogleSingleCard(chCard);
                  }}
                />
              ) : (
                <CharCard
                  id={index++}
                  key={index++}
                  src={
                    "https://deviants-factions.mo.cloudinary.net/" +
                    chCard["id"] +
                    ".gif?tx=h_600,q_80,f_auto"
                  }
                  onClick={() => {
                    props.TogleSingleCard(chCard);
                  }}
                />
              )
            )}
          </CardsItemsContainer>
        </CardsCharContainer>
        <CardsTechContainer>
          <CardsContainersTitle>Technologies</CardsContainersTitle>
          <CardsItemsContainer>
            {props.TechCardList.map((techCard, index) =>
              techCard["CardType"] === "Common" ? (
                <TechCard
                  id={index++}
                  key={index++}
                  src={
                    "https://deviants-factions.mo.cloudinary.net/" +
                    techCard["id"] +
                    ".png?tx=h_600,q_80,f_auto"
                  }
                  onClick={() => {
                    props.TogleSingleCard(techCard);
                  }}
                />
              ) : (
                <TechCard
                  id={index++}
                  key={index++}
                  src={
                    "https://deviants-factions.mo.cloudinary.net/" +
                    techCard["id"] +
                    ".gif?tx=h_600,q_80,f_auto"
                  }
                  onClick={() => {
                    props.TogleSingleCard(techCard);
                  }}
                />
              )
            )}
          </CardsItemsContainer>
        </CardsTechContainer>
      </CardsContainer>
    </>
  );
};

export default List;
