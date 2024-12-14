import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const categories = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  return (
    <div className="categories-container">
      <h2>Shop by Categories</h2>
      <div className="category-links">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/categories/${category}`}
            className="category-link"
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
