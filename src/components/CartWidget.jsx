// src/components/CartWidget.jsx
import React, { useContext } from "react";
import { CartContext } from "../components/context/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={widgetStyles.container}>
      <span role="img" aria-label="carrito" style={widgetStyles.icon}>
        🛒
      </span>
      <span style={widgetStyles.count}>{totalQuantity}</span>
    </div>
  );
}

const widgetStyles = {
  container: {
    position: "relative",
    display: "inline-block",
    marginLeft: "15px",
  },
  icon: {
    fontSize: "1.8rem",
  },
  count: {
    position: "absolute",
    top: "-5px",
    right: "-10px",
    background: "red",
    color: "#fff",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.8rem",
  },
};

export default CartWidget;
