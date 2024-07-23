import Contact from "@/components/Contact";
import DescribedItem from "@/components/DescribedItem";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Types from "@/components/Types";
import YoutubeVideo from "@/components/YoutubeVideo";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Layout title="Accueil">
        <section className={styles.content}>
          <Header />
          <br />
          <div className={styles.row}>
            <p>Découvrez Nos Meilleurs Services</p>
            <div className="hr" />
          </div>
          <br />
          <Types />
          <br />
          <DescribedItem
            title="Pourquoi FCS ?"
            description="FCS vous offre des solutions professionnelles qui répondent à tous vos
          besoins. Des services clés en main pour augmenter l'éfficacité et
          assurer l'uniformité du service. Créé en 2012,FCS est devenu un acteur
          majeur du lavage automobile écologique. Nos techniques durables
          alliées à une qualité professionnelle sont mises à disposition des
          acteurs du monde automobile. Aujourd'hui FCS propose une large gamme
          de services complète et adaptée aux besoins automobile. Nos
          innovations liées à notre expertise font de nous un référent de ce
          secteur."
            img="/images/why.jpg"
            flexDirection="row"
          />
          <br />
          <YoutubeVideo />
          <br />
          <Stats />
          <br />
          <Contact />
          <br />
          <Partners />
          <br />
        </section>
      </Layout>
    </>
  );
}
