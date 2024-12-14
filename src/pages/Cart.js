import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalCost.toFixed(2)}</h3>
          <Link to="/checkout">
            <button className="btn-checkout">Proceed to Checkout</button>
          </Link>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
