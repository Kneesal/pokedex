import React from "react";

const DescriptionCard = ({ pokedata }) => {
  pokedata.sort((a, b) => a.id - b.id);
  console.log(pokedata[0].habitat.name)
  return (
    <div className="flex">
      {pokedata.map((data) => {
        return (
        <div>
        <p>{data.habitat.name}</p>
        {/* <p>{pokedata.flavor_text_entries[0].flavour_text}</p> */}
        </div>
        )
      })}
    </div>
  );
};

export default DescriptionCard;
