// src/components/ItemCount.jsx
import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.counter}>
        <button style={styles.button} onClick={decrement}>
          -
        </button>
        <span style={styles.quantity}>{quantity}</span>
        <button style={styles.button} onClick={increment}>
          +
        </button>
      </div>
      <button style={styles.addButton} onClick={() => onAdd(quantity)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

const styles = {
  container: {
    margin: "20px 0",
    textAlign: "center",
  },
  counter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  button: {
    fontSize: "1.2rem",
    width: "30px",
    height: "30px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    cursor: "pointer",
    margin: "0 10px",
  },
  quantity: {
    fontSize: "1.2rem",
    width: "30px",
    textAlign: "center",
  },
  addButton: {
    padding: "8px 16px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ItemCount;
