// src/components/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  // Calculamos el total de la compra
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div style={cartStyles.container}>
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} style={cartStyles.cartItem}>
          <h3>{item.title}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button
            onClick={() => removeItem(item.id)}
            style={cartStyles.removeButton}
          >
            Eliminar
          </button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart} style={cartStyles.clearButton}>
        Vaciar Carrito
      </button>
      {/* Botón para ir al checkout */}
      <Link to="/checkout" style={cartStyles.checkoutButton}>
        Finalizar Compra
      </Link>
    </div>
  );
}

const cartStyles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  cartItem: {
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  clearButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#34495e",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  checkoutButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none", // Para que luzca como botón y no subrayado
    display: "inline-block",
  },
};

export default Cart;
