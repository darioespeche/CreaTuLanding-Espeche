// src/pages/ItemListContainer.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../products";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams(); // Si la ruta incluye /category/:categoryId
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simula una llamada asíncrona (por ejemplo, a una API)
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    fetchData.then((res) => {
      if (categoryId) {
        // Filtra los productos por categoría (asegúrate de que en products.js el campo se llame "category")
        setData(
          res.filter(
            (item) => item.category.toLowerCase() === categoryId.toLowerCase()
          )
        );
      } else {
        // Si no hay categoría, muestra todos
        setData(res);
      }
    });
  }, [categoryId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{greeting || "Catálogo de Experiencias"}</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {data.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
            }}
          >
            <h3>{product.title}</h3>
            <img
              src={product.imageUrl}
              alt={product.title}
              width="100%"
              style={{ marginBottom: "5px" }}
            />
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
            {/* Enlace a la vista detalle del producto */}
            <Link to={`/item/${product.id}`}>Ver Detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
