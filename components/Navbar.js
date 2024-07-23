import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { Drawer, IconButton } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";

function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 40;
      setScrolled(scrollCheck);
    });
  });

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    document.addEventListener("scroll", () => {
      var currentScrollPos = window.pageYOffset;
      if (
        prevScrollpos > currentScrollPos ||
        document.documentElement.clientHeight ===
          document.documentElement.scrollHeight
      ) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-150px";
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  const toggleMenu = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Drawer
        anchor={"top"}
        open={drawerOpen}
        onClose={() => {
          toggleMenu();
        }}
      >
        <div className={styles.drawer}>
          <Link
            onClick={() => {
              toggleMenu();
            }}
            href={"/"}
          >
            <p>Accueil</p>
          </Link>
          <Link
            onClick={() => {
              toggleMenu();
            }}
            href={"/about"}
          >
            <p>Qui somme nous</p>
          </Link>
          <Link
            onClick={() => {
              toggleMenu();
            }}
            href={"/particulier"}
          >
            <p>Particulier</p>
          </Link>
          <Link
            onClick={() => {
              toggleMenu();
            }}
            href={"/professionnel"}
          >
            <p>Professionel</p>
          </Link>
          <Link
            onClick={() => {
              toggleMenu();
            }}
            href={"/flotte"}
          >
            <p>Gestionnaire de flotte</p>
          </Link>
          {/* <Link
            onClick={() => {
              toggleMenu();
            }}
            href={"/blog"}
          >
            <p>Blog</p>
          </Link> */}
          <Link
            onClick={() => {
              toggleMenu();
            }}
            href={"#contact"}
          >
            <p>Contact</p>
          </Link>
          <IconButton color="white" onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </div>
      </Drawer>
      <section
        id="header"
        className={styles.navbar}
        style={{
          transition: "all 0.3s",
        }}
      >
        <div className={styles.row}>
          <div className={styles.contacts}>
            <PhoneIcon fontSize="12px" />
            &nbsp;<p>Passez un appel +33 1 47 10 93 90</p>
            &nbsp;&nbsp;
            <MailOutlineIcon fontSize="12px" />
            &nbsp;
            <p>Contactez-nous contact@groupefcs.com</p>
          </div>
          <div className={styles.socials}>
            <p>Suivez-nous</p>&nbsp;&nbsp;
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100064028010764"
            >
              <FacebookIcon fontSize="12px" />
            </Link>
            &nbsp;
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/fcs-facilityservices1/"
            >
              <LinkedInIcon fontSize="12px" />
            </Link>
            &nbsp;
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/groupe_fcs?igsh=cmFlc2dkcXl1d3E5"
            >
              <InstagramIcon fontSize="12px" />
            </Link>
            &nbsp;
          </div>
        </div>
        <div className={styles.main}>
          <IconButton onClick={toggleMenu} className={styles.drawerbtn}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Link style={{ border: "none" }} href="/">
            <img alt="logo" src="/logo.jpeg" />
          </Link>
          <div className={styles.links}>
            <Link href="/">Accueil</Link>
            <Link href="/about">Qui somme nous </Link>
            <div className={styles.services}>
              <p>Nos services</p>
              <div className={styles.servicesModal}>
                <Link href={"/particulier"}>
                  <p>Particulier</p>
                </Link>
                <Link href={"/professionnel"}>
                  <p>Professionnel</p>
                </Link>
                <Link href={"/flotte"}>
                  <p>Gestionnaire de flotte</p>
                </Link>
              </div>
            </div>
            <Link href="/blog">Blog</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className={styles.mobileSocials}>
            <Link href="">
              <FacebookIcon fontSize="12px" />
            </Link>
            &nbsp;
            <Link href="">
              <LinkedInIcon fontSize="12px" />
            </Link>
            &nbsp;
            <Link href="">
              <InstagramIcon fontSize="12px" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
