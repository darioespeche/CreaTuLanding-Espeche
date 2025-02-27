// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer style={footerStyles.container}>
      <p style={footerStyles.text}>
        © 2025 Experiencias Locales. Todos los derechos reservados.
      </p>
      <div style={footerStyles.social}>
        <a
          href="https://facebook.com"
          style={footerStyles.link}
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          style={footerStyles.link}
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com"
          style={footerStyles.link}
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}

const footerStyles = {
  container: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px",
  },
  text: {
    margin: "0 0 10px 0",
    fontSize: "0.9rem",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "#ffc107",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
};
