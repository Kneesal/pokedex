import React from "react";

const DescriptionCard = ({ selectedCard, selectedSprite, show }) => {
  console.log("selectedsprite", selectedCard[0])
  return show ===true ? (
    <div className="flex">
        <div>
        <img alt = {selectedSprite[0]?.name ?? "pokemon"} src = {selectedSprite[0]?.sprites.front_default}></img>
        <p> Habitat: {selectedCard[0]?.habitat?.name ?? "Unknown"}</p>
        <p>{selectedCard[0]?.flavor_text_entries[0]?.flavor_text}</p>
        </div>
    </div>
  ): null ;
};

export default DescriptionCard;
