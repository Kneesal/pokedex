import React from "react";

const Modal = ({ selectedCard, selectedSprite, show, showModal }) => {
  console.log("selectedsprite", selectedCard[0]?.flavor_text_entries[0]?.flavor_text)
  let englishText = ''
  for(let i = 0; i < selectedCard[0]?.flavor_text_entries?.length; i++){ //using for loop so that we can break it as soon as first 'english entry is found'
    if(selectedCard[0].flavor_text_entries[i]?.language?.name === "en"){
         englishText = selectedCard[0]?.flavor_text_entries[i]?.flavor_text.toString();
         break
    }
  }
  console.log(englishText)

  return show ? (
    <div className="modalbg">
      <div className="flex content">
          <div>
            <img alt = {selectedSprite[0]?.name ?? "pokemon"} src = {selectedSprite[0]?.sprites.front_default}></img>
            <p> Habitat: {selectedCard[0]?.habitat?.name ?? "Unknown"}</p>
            <p>{englishText}</p>
            <button onClick={()=>showModal(selectedCard.id)}>close entry</button>
          </div>
      </div>
    </div>
  ): null ;
};

export default Modal;
