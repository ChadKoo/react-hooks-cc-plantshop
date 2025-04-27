import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleClick() {
    setIsInStock((isInStock) => !isInStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p> 

     
      {isInStock ? (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>
          Out of Stock
        </button>
      )}

      
      <button 
        onClick={() => onDelete(plant.id)} 
        style={{ padding: '5px 10px', marginTop: '5px', marginLeft: '10px' }}
      >
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
