import styles from "@/styles/components/DescribedItem.module.scss";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
function DescribedItem({ title, description, link, img, flexDirection }) {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <div
      className={styles.container}
      style={!isMobile ? { flexDirection } : null}
    >
      <div className={styles.col}>
        <img alt="groupe-fcs" src={img} />
      </div>
      <div className={styles.col}>
        <p>{title}</p>
        <div className="hr" />
        <p>{description}</p>
        <br />
        {link && <Link href={link}>voir toute la sélection</Link>}
      </div>
    </div>
  );
}

export default DescribedItem;
