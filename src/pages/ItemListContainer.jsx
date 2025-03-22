import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import styles from "../styles/ItemListContainer.module.css";
import IntroSection from "../components/IntroSection";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); // Captura el parámetro de la URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "productos");
        let snapshot;

        // Si hay categoryId, aplicamos el filtro; sino, traemos todos los productos
        if (categoryId) {
          const q = query(
            productsCollection,
            where("category", "==", categoryId)
          );
          snapshot = await getDocs(q);
        } else {
          snapshot = await getDocs(productsCollection);
        }

        const fetchedProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(fetchedProducts);
        console.log("Productos obtenidos:", fetchedProducts);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]); // Se vuelve a ejecutar cada vez que cambia categoryId

  return (
    <div className={styles.container}>
      <IntroSection />
      <h2 className={styles.title}>
        {greeting || "Bienvenidos a Experiencias Locales"}
      </h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              className={styles.cardImage}
              src={product.imageUrl}
              alt={product.title}
            />
            <h3 className={styles.cardTitle}>{product.title}</h3>
            <p className={styles.cardDescription}>{product.description}</p>
            <strong className={styles.cardPrice}>${product.price}</strong>
            <Link to={`/item/${product.id}`} className={styles.cardLink}>
              <h5>Click aquí</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
