import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={styles.navBar}>
      <div style={styles.logo}>
        <h2>ExpLocal</h2>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <a href="#gastronomia">Gastronomía</a>
        </li>
        <li>
          <a href="#naturaleza">Naturaleza</a>
        </li>
        <li>
          <a href="#cultura">Cultura</a>
        </li>
        <li>
          <a href="#deportes">Deportes</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>

      {/* CartWidget va aquí */}
      <CartWidget />
    </nav>
  );
}

const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    padding: "10px 20px",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
    cursor: "pointer",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
};

export default NavBar;
