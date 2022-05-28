import React from 'react'
import { CardsCharContainer } from './Components/CardsCharContainer';
//import { CardList } from '../../Utils/ServicesFunctions'
import { CardsContainer } from './Components/CardsContainer';
import { CardsHQContainer } from './Components/CardsHQContainer';
import { CardsTechContainer } from './Components/CardsTechContainer';

const List = () => {
  //const Cards = CardList;
  return (
    <>
      <CardsContainer>
        <CardsHQContainer>

        </CardsHQContainer>
        <CardsCharContainer>

        </CardsCharContainer>
        <CardsTechContainer>
          
        </CardsTechContainer>
      </CardsContainer>
    </>
  )
}

export default List