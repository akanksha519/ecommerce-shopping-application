import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => setCartItems((prev) => [...prev, product]);
  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/categories" element={<Categories />} />

        <Route
          path="/categories/:category"
          element={<Category addToCart={addToCart} />}
        />

        <Route
          path="/categories/womens"
          element={<Category addToCart={addToCart} />}
        />
        <Route
          path="/categories/mens"
          element={<Category addToCart={addToCart} />}
        />
        <Route
          path="/categories/jewelry"
          element={<Category addToCart={addToCart} />}
        />
        <Route
          path="/categories/electronics"
          element={<Category addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />

        <Route
          path="/checkout"
          element={
            user ? (
              <Checkout cartItems={cartItems} />
            ) : (
              <Login setUser={setUser} />
            )
          }
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
