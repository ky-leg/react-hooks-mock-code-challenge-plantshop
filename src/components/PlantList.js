import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  if (!plants){
    return (
      <h2>plants loading...</h2>
    )
  }

  return (
    <ul className="cards">{plants.map(plant => <PlantCard key={plant.id} plant={plant}/>)}</ul>
  );
}

export default PlantList;
