import React, { useState } from "react";

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order placed! Total: $${cartItems
        .reduce((acc, item) => acc + item.price, 0)
        .toFixed(2)}`
    );
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Payment Details"
          onChange={(e) =>
            setFormData({ ...formData, payment: e.target.value })
          }
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
