// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"; // Ajusta la ruta según tu estructura

export default function NavBar() {
  return (
    <nav style={styles.navBar}>
      <div style={styles.brandContainer}>
        <Link to="/" style={styles.brandName}>
          ExpLocal
        </Link>
        <span style={styles.slogan}>Santiago del Estero</span>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.link}>
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link to="/category/relax" style={styles.link}>
            Relax
          </Link>
        </li>
        <li>
          <Link to="/category/cultura" style={styles.link}>
            Cultura
          </Link>
        </li>
        <li>
          <Link to="/category/deporte" style={styles.link}>
            Deporte
          </Link>
        </li>
        <li>
          <Link to="/category/naturaleza" style={styles.link}>
            Naturaleza
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

const styles = {
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background:
      "linear-gradient(90deg, rgba(84,43,43,1) 0%, rgba(117,67,67,1) 100%)",
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  brandContainer: {
    display: "flex",
    flexDirection: "column",
  },
  brandName: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    marginBottom: "2px",
  },
  slogan: {
    fontSize: "0.8rem",
    color: "#ffc107",
    fontWeight: "lighter",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.2s",
  },
};
