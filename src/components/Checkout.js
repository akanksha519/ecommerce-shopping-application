import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate total cost
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="confirmation">
        <h2>Order Confirmed!</h2>
        <p>
          Thank you, {formData.name}. Your order has been placed successfully.
        </p>
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: ${totalCost.toFixed(2)}</h3>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            maxLength="16"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="MM/YY"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
            maxLength="3"
          />
        </div>
        <button type="submit" className="btn-submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
