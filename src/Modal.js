import React from "react";

const DescriptionCard = ({ selectedCard, selectedSprite, show, showModal }) => {
  console.log("selectedsprite", selectedCard[0])
  return show ===true ? (
    <div className="modalbg">
      <div className="flex content">
          <div>
            <img alt = {selectedSprite[0]?.name ?? "pokemon"} src = {selectedSprite[0]?.sprites.front_default}></img>
            <p> Habitat: {selectedCard[0]?.habitat?.name ?? "Unknown"}</p>
            <p>{selectedCard[0]?.flavor_text_entries[0]?.flavor_text}</p>
            <button onClick={()=>showModal(selectedCard.id)}>close entry</button>
          </div>
      </div>
    </div>
  ): null ;
};

export default DescriptionCard;
