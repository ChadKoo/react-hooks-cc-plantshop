import React, { useState } from "react";

function PlantCard({ plant, onToggleStock }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleClick() {
    setIsInStock((isInStock) => !isInStock);
    onToggleStock(plant.id);
  }

  const price = plant.price != null ? `$${plant.price.toFixed(2)}` : "Price not available";

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
