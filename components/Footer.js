import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";
function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <img alt="groupe-fcs" src="/logo.jpeg" />
        </div>
        <div className={styles.col}>
          <div className={styles.row}>
            <LocalPhoneIcon />
            &nbsp;<p>+33 1 47 10 93 90</p>
          </div>
          <div className={styles.row}>
            <MailOutlineIcon />
            &nbsp;<p>contact@groupefcs.com</p>
          </div>
          <div className={styles.row}>
            <LocationOnIcon />
            &nbsp;<p>215 Av. Georges Clemenceau,92000 Nanterre</p>
          </div>
        </div>
        <div className={styles.col}>
          <p>Suivez-nous</p>
          <div className={styles.row}>
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100064028010764"
            >
              <FacebookIcon />
            </Link>
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/groupe_fcs?igsh=cmFlc2dkcXl1d3E5"
            >
              <InstagramIcon />
            </Link>
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/fcs-facilityservices1/"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright © 2024, FCS GROUPE All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
