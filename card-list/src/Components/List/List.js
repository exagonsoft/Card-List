import React from 'react'
import { CardsCharContainer } from './Components/CardsCharContainer';
//import { CardList } from '../../Utils/ServicesFunctions'
import { CardsContainer } from './Components/CardsContainer';
import { CardsContainersTitle } from './Components/CardsContainersTitle';
import { CardsHQContainer } from './Components/CardsHQContainer';
import { CardsItemsContainer } from './Components/CardsItemContainer';
import { CardsTechContainer } from './Components/CardsTechContainer';

const List = () => {
  //const Cards = CardList;
  return (
    <>
      <CardsContainer>
        <CardsHQContainer>
          <CardsContainersTitle>Head Quartes</CardsContainersTitle>
          <CardsItemsContainer></CardsItemsContainer>
        </CardsHQContainer>
        <CardsCharContainer>
        <CardsContainersTitle>Characters</CardsContainersTitle>
        <CardsItemsContainer></CardsItemsContainer>
        </CardsCharContainer>
        <CardsTechContainer>
        <CardsContainersTitle>Technologies</CardsContainersTitle>
        <CardsItemsContainer></CardsItemsContainer>
        </CardsTechContainer>
      </CardsContainer>
    </>
  )
}

export default List