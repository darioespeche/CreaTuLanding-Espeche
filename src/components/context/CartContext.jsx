// src/context/CartContext.jsx
import React, { createContext, useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Creamos el provider del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      // Verifica si el producto ya está en el carrito
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Si ya existe, actualizamos la cantidad
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        // Si no existe, lo agregamos
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  // Funciones adicionales (opcional)
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
