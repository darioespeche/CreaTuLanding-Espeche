// src/components/context/CartContext.jsx
import React, { createContext, useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Creamos el provider para envolver la aplicación
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      // Verificamos si el producto ya existe en el carrito
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Si existe, actualizamos la cantidad
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        // Si no existe, lo agregamos al carrito
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  // Función para remover un producto del carrito
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
