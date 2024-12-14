import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";

const Category = ({ addToCart }) => {
  const { category } = useParams(); // Get the selected category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [category]); // Re-fetch when category changes

  return (
    <div className="category-container">
      <h2>{category ? category.toUpperCase() : "CATEGORY"}</h2>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && !error && products.length === 0 && (
        <p>No products available in this category.</p>
      )}
      <div className="products-grid">
        {!loading &&
          !error &&
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
