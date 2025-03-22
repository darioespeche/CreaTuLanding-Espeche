// src/pages/ItemDetailContainer.jsx
import React, { useState, useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../components/context/CartContext";
import ItemCount from "../components/ItemCount";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "productos", id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.log("No existe el producto con ID:", id);
      }
    };
    fetchItem();
  }, [id]);

  const handleAdd = (quantity) => {
    addItem(item, quantity);
    setAdded(true);
  };

  if (!item) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div style={detailStyles.container}>
      <h1>{item.title}</h1>
      <img src={item.imageUrl} alt={item.title} style={detailStyles.image} />
      <p>{item.description}</p>
      <p>
        <strong>Precio: ${item.price}</strong>
      </p>
      <p>
        <strong>Stock: {item.stock}</strong>
      </p>
      {added ? (
        <div style={detailStyles.addedContainer}>
          <p style={detailStyles.addedMessage}>Producto agregado al carrito.</p>
          <Link to="/cart" style={detailStyles.linkToCart}>
            Ir al Carrito
          </Link>
        </div>
      ) : (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
}

const detailStyles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  addedContainer: {
    marginTop: "10px",
  },
  addedMessage: {
    color: "green",
    fontWeight: "bold",
  },
  linkToCart: {
    display: "block",
    marginTop: "10px",
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default ItemDetailContainer;
