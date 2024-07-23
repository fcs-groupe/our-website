import styles from "@/styles/components/Header.module.scss";
import Link from "next/link";

function Header(props) {
  return (
    <div className={styles.container}>
      <img alt="groupe-fcs" src="/images/header.jpg" />
      <div className={styles.overlay}>
        <div className={styles.col}>
          <p>fcs</p>
          <p>groupe</p>
          <h1>
            Spécialiste dans le lavage Bio écologique et gestionnaire de flotte
            depuis 2012
          </h1>
          <Link href="#contact">réserver maintenant</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
