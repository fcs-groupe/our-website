import styles from "@/styles/components/Types.module.scss";
import Link from "next/link";
function Types(props) {
  return (
    <div className={styles.container}>
      <Link href="/particulier" className={styles.col}>
        <img alt="particulier" src="/images/particular.jpg" />
        <div className={styles.overlay}>
          <p>Particulier</p>
        </div>
      </Link>
      <Link href="/flotte" className={styles.col}>
        <img alt="flotte" src="/images/flotte.jpg" />
        <div className={styles.overlay}>
          <p>Gestionnaire de flotte</p>
        </div>
      </Link>
      <Link href="/professionnel" className={styles.col}>
        <img alt="professionnel" src="/images/professional.jpg" />
        <div className={styles.overlay}>
          <p>Professionnel</p>
        </div>
      </Link>
    </div>
  );
}

export default Types;
