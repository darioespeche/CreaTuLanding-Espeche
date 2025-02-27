// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido a Experiencias Locales" />
            }
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/about" element={<h2>Sobre nosotros</h2>} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
