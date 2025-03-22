// IntroSection.jsx
import styles from "../styles/IntroSection.module.css";

function IntroSection() {
  return (
    <div className={styles.introSection}>
      <h2 className={styles.title}>Descubre la Magia de Santiago del Estero</h2>
      <p className={styles.paragraph}>
        Bienvenido a Experiencias Locales, el portal donde la tradición y la
        modernidad se fusionan para ofrecerte aventuras inolvidables en Santiago
        del Estero. Sumérgete en un destino vibrante y auténtico, donde cada
        rincón cuenta una historia: desde los relajantes baños termales y los
        recónditos paisajes naturales, hasta el latido de las festividades
        folclóricas y la calidez de su gente.
      </p>
    </div>
  );
}

export default IntroSection;
