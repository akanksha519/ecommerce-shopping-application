import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        <i className="fas fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
