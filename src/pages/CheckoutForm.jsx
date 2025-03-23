// src/pages/CheckoutForm.jsx
import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { CartContext } from "../components/context/CartContext";

function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Armar el objeto orden
    const order = {
      buyer,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), order);
      console.log("Orden generada con ID:", docRef.id);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar orden:", error);
      alert("Error: " + error.message); // Para verlo más claro
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (orderId)
    return (
      <div style={checkoutStyles.confirmation}>
        <h2>Orden generada exitosamente</h2>
        <p>Tu número de orden es: {orderId}</p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit} style={checkoutStyles.form}>
      <h2>Completa tus datos para el checkout</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
        required
        style={checkoutStyles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
        required
        style={checkoutStyles.input}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
        required
        style={checkoutStyles.input}
      />
      <button type="submit" style={checkoutStyles.button}>
        Confirmar Compra
      </button>
    </form>
  );
}

const checkoutStyles = {
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#27ae60",
    color: "#fff",
    cursor: "pointer",
  },
  confirmation: {
    textAlign: "center",
    padding: "20px",
  },
};

export default CheckoutForm;
