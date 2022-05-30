import React from "react";
import { BackGround } from "./Components/Bacground";
import { CardDescription } from "./Components/CardDescription";
import { CardImage } from "./Components/CardImage";

const SingleCard = (props) => {
  return (
    <>
      <BackGround ShowSingle={props.ShowSingle} onClick={props.TogleSingleCard}>
        {props.Card["CardType"] === "HQ" ||
         props.Card["Rarity"] === "Common" ? (
          <CardImage
            src={
              "https://deviants-factions.mo.cloudinary.net/" +
              props.Card["id"] +
              ".png?tx=h_600,q_80,f_auto"
            }
          />
        ) : (
          <CardImage
            src={
              "https://deviants-factions.mo.cloudinary.net/" +
              props.Card["id"] +
              ".gif?tx=h_600,q_80,f_auto"
            }
          />
        )}
        <CardDescription>
          "Name": {props.Card["Name"]} <br />
          "CardType": {props.Card["CardType"]}
          <br />
          "Faction": {props.Card["Faction"]}
          <br />
          "Artist": {props.Card["Artist"]}
          <br />
          "Rarity": {props.Card["Rarity"]}
          <br />
          "Description": {props.Card["Description"]}
          <br />
        </CardDescription>
      </BackGround>
    </>
  );
};

export default SingleCard;
