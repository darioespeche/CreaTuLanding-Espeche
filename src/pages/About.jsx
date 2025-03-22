import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <section className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Sobre ExpLocal</h1>
      <p className={styles.aboutText}>
        ExpLocal nace con la idea de conectar a viajeros curiosos con la esencia
        de Santiago del Estero. Somos un equipo apasionado por la cultura
        folclórica, la historia y la calidez de su gente. Queremos compartir
        contigo la magia de nuestra tierra: sus paisajes únicos, su gastronomía
        tradicional y, por supuesto, su música y danza inigualables.
      </p>
      <p className={styles.aboutText}>
        Nuestro objetivo es ofrecer experiencias auténticas y memorables,
        apoyando el desarrollo local y promoviendo la identidad santiagueña.
        Creemos en un turismo responsable y sostenible, donde cada visita se
        convierta en un intercambio cultural que beneficie tanto a los viajeros
        como a las comunidades anfitrionas.
      </p>
      <p className={styles.aboutText}>
        ¿Listo para descubrir la magia de Santiago del Estero? ¡Te invitamos a
        explorar nuestro catálogo de experiencias y a vivir cada aventura con la
        misma pasión que nos inspira a nosotros!
      </p>
    </section>
  );
}

export default About;
