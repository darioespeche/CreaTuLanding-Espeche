// src/pages/ItemDetailContainer.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import { CartContext } from "../components/context/CartContext";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    // Simula una llamada asíncrona para obtener el producto
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    fetchData.then((res) => {
      const found = res.find((product) => product.id === id);
      setItem(found);
    });
  }, [id]);

  if (!item) {
    return <h2>Cargando...</h2>;
  }

  const handleAddToCart = () => {
    addItem(item, quantity);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{item.title}</h1>
      <img src={item.imageUrl} alt={item.title} width="300px" />
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>{item.description}</p>
      <div style={{ margin: "10px 0" }}>
        <label>
          Cantidad:{" "}
          <input
            type="number"
            value={quantity}
            min="1"
            max={item.stock}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            style={{ width: "50px" }}
          />
        </label>
      </div>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemDetailContainer;
