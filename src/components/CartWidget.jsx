import React from "react";

function CartWidget() {
  return (
    <div style={styles.cartContainer}>
      <span role="img" aria-label="carrito" style={styles.cartIcon}>
        🛒
      </span>
      <span style={styles.cartCount}>3</span>
    </div>
  );
}

const styles = {
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    fontSize: "2.5rem",
  },
  cartCount: {
    position: "absolute",
    top: "-5px",
    right: "-10px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.8rem",
  },
};

export default CartWidget;
