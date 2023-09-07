import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding/removing items from the cart
  const handleAddToCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

