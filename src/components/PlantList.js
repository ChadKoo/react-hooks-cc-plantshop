import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id || plant.name} 
          plant={plant} 
          onDelete={onDeletePlant} 
        />
      ))}
    </ul>
  );
}

export default PlantList;
