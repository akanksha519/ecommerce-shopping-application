import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ShopEasy</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/categories/men's clothing">Men's</Link>
        </li>
        <li>
          <Link to="/categories/women's clothing">Women's</Link>
        </li>
        <li>
          <Link to="/categories/jewelery">Jewellery</Link>
        </li>
        <li>
          <Link to="/categories/electronics">Electronics</Link>
        </li>
      </ul>
      <div className="navbar-icons">
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i> Cart
        </Link>
        <Link to="/login">
          <i className="fas fa-user-circle"></i> Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
