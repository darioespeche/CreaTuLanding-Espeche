import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <section style={styles.container}>
      <h1>{greeting}</h1>
      {/* Aquí, en entregas futuras, mostraremos un listado de experiencias */}
    </section>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    padding: "10px",
  },
};

export default ItemListContainer;
