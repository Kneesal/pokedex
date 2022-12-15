import React from "react";

const Modal = ({ selectedCard, selectedSprite, show, showModal }) => {
  let englishText = ''
  for(let i = 0; i < selectedCard[0]?.flavor_text_entries?.length; i++){ //using for loop so that we can break it as soon as first english entry is found
    if(selectedCard[0].flavor_text_entries[i]?.language?.name === "en"){
         englishText = selectedCard[0]?.flavor_text_entries[i]?.flavor_text.toString();
         break;
    }
  }

  return show ? (
    <div className="modalbg">
      <div className="flex content">
          <div>
            <h1>{selectedCard[0]?.name}</h1>
            <p>{`pokédex entry # ${selectedCard[0]?.id}`}</p>
            <img alt = {selectedSprite[0]?.name ?? "pokemon"} src = {selectedSprite[0]?.sprites.front_default}></img>
            <p>{englishText}</p>
            <button onClick={()=>showModal(selectedCard.id)}>close entry</button>
          </div>
      </div>
    </div>
  ): null ;
};

export default Modal;
