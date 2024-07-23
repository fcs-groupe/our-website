import Contact from "@/components/Contact";
import DescribedItem from "@/components/DescribedItem";
import Layout from "@/components/Layout";
import Partners from "@/components/Partners";
import styles from "@/styles/About.module.scss";

function About(props) {
  return (
    <Layout title="A propos">
      <DescribedItem
        title="Notre histoire"
        description="Créé en 2012,FCS est devenu un acteur majeur du lavage automobile écologique. Nos techniques durables alliées à une qualité professionnelle sont mises à disposition des acteurs du monde automobile. FCS vous offre des solutions professionnelles qui répondent à tous leurs besoins. Des services clés en main pour augmenter l'efficacité et assurer l'uniformité du service."
        flexDirection="row"
        img="/images/about1.jpg"
      />
      <div className={styles.text}>
        <p>
          Aujourd&apos;hui FCS propose une large gamme de services complète et
          adaptée aux besoins automobile. Nos innovations liées à notre
          expertise font de nous un référent de ce secteur.
        </p>
      </div>
      <br />
      <DescribedItem
        title="FCS GROUPE"
        description="Chez FCS,l'humain est au cœur de nos préoccupations.FCS encourage le nettoyage à la vapeur d'eau et à la main avec des produits écologiques et respectueux de l'environnement. Innovant grâce à l'amélioration continue, FCS cherche à proposer la meilleure qualité de service à ses clients de part des process de nettoyage adaptés à chacun de leur besoin."
        flexDirection="row-reverse"
        img="/images/about2.jpg"
      />
      <br />
      <Contact />
      <br />
      <Partners />
      <br />
    </Layout>
  );
}

export default About;
