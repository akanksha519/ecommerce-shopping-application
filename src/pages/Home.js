import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/apiClient";
import ProductCard from "../components/ProductCard";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const newProducts = await fetchProducts(page, 10);
        setProducts((prev) => [...prev, ...newProducts]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [page]);

  const loadMore = () => setPage((prev) => prev + 1);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default Home;
